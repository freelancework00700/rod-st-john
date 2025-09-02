import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

function handlePdfClick(url) {
    const normalized = normalizePath(url);
    openPdfAndroid(normalized);
}

function normalizePath(url) {
    let clean = url.replace(/^https?:\/\/localhost(:\d+)?\//, "/");
    if (clean.startsWith("../")) {
        clean = "/clinical-resources/" + clean.replace(/^(\.\.\/)+/, "");
    } else if (!clean.startsWith("/clinical-resources/")) {
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
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    document.body.innerHTML = '';
    document.body.appendChild(iframe);

    iframe.onload = () => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const pdfLinks = iframeDoc.querySelectorAll('a[href$=".pdf"], a[href*=".pdf?"]');

            pdfLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    handlePdfClick(this.getAttribute("href"));
                });
            });
        } catch (err) {
            console.warn('Cannot access iframe content (cross-origin issue).');
        }
    };
}

window.loadPage = loadPage;
window.handlePdfClick = handlePdfClick;