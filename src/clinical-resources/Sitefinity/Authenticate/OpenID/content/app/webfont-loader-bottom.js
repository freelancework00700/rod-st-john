(function () {
    // TODO: remove this when better solution is provided. Also the link in error.html and consent.html should be changed.
    var baseUrl = "";
    if (window.location.href.indexOf("OpenID/connect") !== -1) {
        baseUrl = "../content/";
    } else {
        baseUrl = "content/";
    }

    var url = baseUrl + "app/load-resources.js";
    var cssUrl = baseUrl + "css/open-sans.css";

    if (!localStorage.sfResources) {
        WebFont.load({
            custom: {
                families: ["Open Sans:3,4,7"],
                urls: [cssUrl]
            },
            active: function () {
                localStorage.sfResources = true;

                loadResources(url);
            },
            inactive: function () {
                console.log("Failed to load fonts!");
            }
        });
    } else {
        loadResources(url);
    }

    function loadResources(url) {
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    }
}());