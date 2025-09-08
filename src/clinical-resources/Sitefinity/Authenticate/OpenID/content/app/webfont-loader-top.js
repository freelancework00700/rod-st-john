(function () {
    if (localStorage.sfResources) {
        // TODO: remove this when better solution is provided. Also the link in error.html and consent.html should be changed.
        var baseUrl = "";
        if (window.location.href.indexOf("OpenID/connect") !== -1) {
            baseUrl = "../content/";
        } else {
            baseUrl = "content/";
        }

        var openSansUrl = baseUrl + "css/open-sans.css";
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = openSansUrl;
        document.head.appendChild(link);

        document.documentElement.classList.add("wf-active");
    }
})();