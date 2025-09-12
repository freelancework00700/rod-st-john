import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { Browser } from '@capacitor/browser';

let iframeHistory = [];
let currentIndex = -1;
const AZURE_LOGIN_URL = 'https://clinical.stjohnwa.com.au/medical-library/other/library/login-user-profile/LoginExternalProvider/Azure%20AD/';

const siteListingHTML = document.getElementById('content').innerHTML;

function handlePdfClick(url) {
    const normalized = normalizePath(url);
    openPdfAndroid(normalized);
}

function normalizePath(url) {
    let clean = url.replace(/^https?:\/\/localhost(:\d+)?\//, "/");
    if (clean.startsWith("../")) {
        clean = clean.replace(/^(\.\.\/)+/, "");
        if (!clean.toLowerCase().startsWith("first-aid-guides")) {
            clean = "/clinical-resources/" + clean;
        }
    } else if (!clean.startsWith("/clinical-resources/") && !clean.startsWith("/First-Aid-Guides/")) {
        clean = "/clinical-resources" + (clean.startsWith("/") ? "" : "/") + clean;
    }
    if (clean.toLowerCase().includes("/docs/")) {
        clean = clean.replace(/\/docs\//i, "/DOCS/");
    }
    const parts = [];
    clean.split("/").forEach(seg => {
        if (seg === "..") {
            parts.pop();
        } else if (seg !== "." && seg !== "") {
            parts.push(seg);
        }
    });
    const finalPath = "/" + parts.join("/");
    return finalPath;
}

async function openPdfAndroid(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);

        const fileName = url.split("/").pop().replace(/[^a-zA-Z0-9_.-]/g, "_");

        const result = await Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: Directory.Data,
            recursive: true,
        });

        const { uri } = await Filesystem.getUri({
            path: fileName,
            directory: Directory.Data,
        });

        await Share.share({
            title: "Open PDF",
            url: uri,
            dialogTitle: "Open with..."
        });
    } catch (err) {
        console.error("Error opening PDF", err);
    }
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            const result = reader.result;
            resolve(result.substring(result.indexOf(",") + 1));
        };
        reader.readAsDataURL(blob);
    });
}

function loadPage(url) {
    if (typeof url === 'string' && (url.toLowerCase().includes('other-departments/sitepages/login.html') || url.toLowerCase().includes('loginexternalprovider/azure%20ad'))) {
        openExternal(AZURE_LOGIN_URL);
        return;
    }
    const content = document.getElementById('content');
    document.getElementById('backBtn').style.display = "inline-block";

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.id = "mainIframe";

    content.innerHTML = '';
    content.appendChild(iframe);

    iframe.onload = () => {
        try {
            const currentUrl = iframe.contentWindow.location.href;

            if (currentIndex === -1 || iframeHistory[currentIndex] !== currentUrl) {
                iframeHistory = iframeHistory.slice(0, currentIndex + 1);
                iframeHistory.push(currentUrl);
                currentIndex++;
            }

            document.getElementById('backBtn').style.display = "inline-block";

            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const pdfLinks = iframeDoc.querySelectorAll('a[href$=".pdf"], a[href*=".pdf?"]');

            pdfLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    handlePdfClick(this.getAttribute("href"));
                });
            });

            // Intercept login link clicks inside iframe and open externally
            const loginLinks = iframeDoc.querySelectorAll('a[href*="other-departments/sitepages/login"]');
            loginLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    openExternal(AZURE_LOGIN_URL);
                });
            });

            // Detect meta refresh redirects and open externally
            const refreshMeta = iframeDoc.querySelector('meta[http-equiv="refresh" i]');
            if (refreshMeta) {
                const content = refreshMeta.getAttribute('content') || '';
                const match = content.match(/url=['"]?([^'";]+)['"]?/i);
                if (match && match[1]) {
                    openExternal(match[1]);
                    return;
                }
            }

            // Observe dynamic additions that may insert login links or meta refresh later
            const observer = new MutationObserver(() => {
                const dynamicLoginLinks = iframeDoc.querySelectorAll('a[href*="other-departments/sitepages/login"]');
                dynamicLoginLinks.forEach(link => {
                    if (!link.__externalBound) {
                        link.__externalBound = true;
                        link.addEventListener('click', function (e) {
                            e.preventDefault();
                            openExternal(AZURE_LOGIN_URL);
                        });
                    }
                });
                const dynamicMeta = iframeDoc.querySelector('meta[http-equiv="refresh" i]');
                if (dynamicMeta) {
                    const c = dynamicMeta.getAttribute('content') || '';
                    const m = c.match(/url=['"]?([^'";]+)['"]?/i);
                    if (m && m[1]) {
                        openExternal(m[1]);
                    }
                }
            });
            observer.observe(iframeDoc.documentElement || iframeDoc.body, { childList: true, subtree: true });
        } catch (err) {
            console.warn('Cannot access iframe content (cross-origin issue).');
        }
    };
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        const prevUrl = iframeHistory[currentIndex];
        
        const iframe = document.getElementById("mainIframe");
        iframe.contentWindow.location.href = prevUrl;
    } else {
        document.getElementById('content').innerHTML = siteListingHTML;
        document.getElementById('backBtn').style.display = "none";

        iframeHistory = [];
        currentIndex = -1;
    }
}

window.loadPage = loadPage;
window.goBack = goBack;

async function openExternal(url) {
    try {
        if (window.Capacitor && window.Capacitor.isNativePlatform) {
            await Browser.open({ url });
        } else {
            window.open(url, '_blank');
        }
    } catch (e) {
        window.location.href = url;
    }
}