import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FileOpener } from '@capacitor-community/file-opener';

let currentUrl;
let iframeHistory = [];
let currentIndex = -1;
const AZURE_LOGIN_URL = 'https://clinical.stjohnwa.com.au/medical-library/other/library/login-user-profile/LoginExternalProvider/Azure%20AD/';

const siteListingHTML = document.getElementById('content').innerHTML;

// intercept external links (http/https) and notify via a custom event
function interceptExternalLinks(rootDocument) {
    if (!rootDocument || rootDocument.__externalInterceptorBound) {
        return;
    }
    rootDocument.__externalInterceptorBound = true;

    const bindOnAnchors = (doc) => {
        const anchors = doc.querySelectorAll('a[href^="http:"], a[href^="https:"]');
        
        anchors.forEach(anchor => {
            if (anchor.__externalBound) return;
            anchor.__externalBound = true;
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href') || '';
                if (/^https?:\/\//i.test(href)) {
                    e.preventDefault();
                    try {
                        window.dispatchEvent(new CustomEvent('externalLinkOpen', { detail: { url: href } }));
                    } catch (_) { /* no-op */ }
                    openExternal(href);
                }
            });
        });
    };

    // initial bind
    try { bindOnAnchors(rootDocument); } catch (_) {}

    // capture inline onclick handlers that redirect using window.location to http/https
    try {
        rootDocument.addEventListener('click', (e) => {
            let node = e.target;
            while (node && node !== rootDocument) {
                if (node.hasAttribute && node.hasAttribute('onclick')) {
                    const handler = node.getAttribute('onclick') || '';
                    // detect explicit http/https URLs inside the inline handler
                    const urlMatch = handler.match(/['\"](https?:\/\/[^'\"\)\s]+)['\"]/i);
                    if (urlMatch && urlMatch[1]) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        try {
                            window.dispatchEvent(new CustomEvent('externalLinkOpen', { detail: { url: urlMatch[1] } }));
                        } catch (_) { /* no-op */ }
                        openExternal(urlMatch[1]);
                        return;
                    }
                }
                node = node.parentElement;
            }
        }, true);
    } catch (_) { /* ignore */ }

    // observe future changes
    try {
        const mo = new MutationObserver(() => bindOnAnchors(rootDocument));
        mo.observe(rootDocument.documentElement || rootDocument.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
    } catch (_) { /* ignore if not permitted */ }
}

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

		await FileOpener.open({
			filePath: uri,
			openWithDefault: true,
			contentType: 'application/pdf',
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
    currentUrl = url;
    if (typeof url === 'string' && (url.toLowerCase().includes('other-departments/sitepages/login.html') || url.toLowerCase().includes('loginexternalprovider/azure%20ad'))) {
        openExternal(AZURE_LOGIN_URL);
        return;
    }
    const content = document.getElementById('content');
    document.getElementById('backBtn').style.display = "inline-block";

    displayHeader();

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

            // intercept generic external http/https links
            interceptExternalLinks(iframeDoc);

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
                // re-bind external links that may have been added dynamically
                interceptExternalLinks(iframeDoc);
            });
            observer.observe(iframeDoc.documentElement || iframeDoc.body, { childList: true, subtree: true });
        } catch (err) {
            console.warn('Cannot access iframe content (cross-origin issue).');
        }
    };
}

function displayHeader() {
    const syncBtn = document.getElementById('syncBtn');
    const backBtn = document.getElementById('backBtn');
    const closeBtn = document.getElementById('closeBtn');
    const forwardBtn = document.getElementById('forwardBtn');
    const appNameVersionEl = document.querySelector('.app-title-section');

    if (currentUrl && currentUrl.includes("clinical-resources")) {
        appNameVersionEl.style.display = 'none';
        if (syncBtn) syncBtn.style.display = 'none';
        if (backBtn) backBtn.style.display = 'inline-block';
        if (closeBtn) closeBtn.style.display = 'inline-block';
        if (forwardBtn) forwardBtn.style.display = 'inline-block';
    } else if (currentUrl && currentUrl.includes("First-Aid-Guides")) {
        appNameVersionEl.style.display = 'none';
        if (syncBtn) syncBtn.style.display = 'none';
        if (backBtn) backBtn.style.display = 'inline-block';
        if (closeBtn) closeBtn.style.display = 'inline-block';
        if (forwardBtn) forwardBtn.style.display = 'inline-block';
    } else {
        appNameVersionEl.style.display = 'flex';
        if (backBtn) backBtn.style.display = 'none';
        if (closeBtn) closeBtn.style.display = 'none';
        if (forwardBtn) forwardBtn.style.display = 'none';
        if (syncBtn) syncBtn.style.display = 'inline-block';
    }
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        const prevUrl = iframeHistory[currentIndex];
        
        const iframe = document.getElementById("mainIframe");
        iframe.contentWindow.location.href = prevUrl;
        displayHeader();
    } else {
        document.getElementById('content').innerHTML = siteListingHTML;
        document.getElementById('backBtn').style.display = "none";

        iframeHistory = [];
        currentIndex = -1;
        currentUrl = null;
        displayHeader();
    }
}

function goForward() {
    if (currentIndex < iframeHistory.length - 1) {
        currentIndex++;
        const nextUrl = iframeHistory[currentIndex];
        const iframe = document.getElementById('mainIframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.location.href = nextUrl;
        }
    }
    displayHeader();
}

function closeView() {
    const content = document.getElementById('content');
    content.innerHTML = siteListingHTML;
    iframeHistory = [];
    currentIndex = -1;
    currentUrl = null;
    displayHeader();
}

window.goBack = goBack;
window.loadPage = loadPage;
window.closeView = closeView;
window.goForward = goForward;

// also intercept external links in the host document (if any)
try { interceptExternalLinks(document); } catch (_) {}

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

App.addListener('backButton', ({ canGoBack }) => {
  const backBtn = document.getElementById('backBtn');
  if (backBtn && backBtn.style.display !== 'none') {
    goBack();
  } else {
    App.exitApp();
  }
});