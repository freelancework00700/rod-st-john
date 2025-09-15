const cName = "TermsCookie";

window.addEventListener("load", function () {
    const termsReferences = document.querySelector(".TermsReferences");
    const acceptBtn = document.getElementById("acceptBtn");
    const declineBtn = document.getElementById("declineBtn");

    const termsCookie = getCookie(cName);
    if (termsCookie === "" || termsCookie === "0") {
        termsReferences.style.display = "block";
        disableBackgroundScrolling();
    } else if (termsCookie === "1") {
        termsReferences.style.display = "none";
    }

    acceptBtn.addEventListener("click", function () {
        setCookie(cName, "1", 180); // Set the cookie to expire in 365 days (or any desired value)
        termsReferences.style.display = "none";
        enableBackgroundScrolling();
    });

    declineBtn.addEventListener("click", function () {
        window.location.href = "https://www.stjohnwa.com.au";
    });
});

function disableBackgroundScrolling() {
    // Prevent scrolling on the background screen
    document.body.style.overflow = "hidden";

    // Dim the background by adding an overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Black with 50% opacity
    overlay.style.zIndex = "9998"; // Place the overlay below the TermsReferences modal
    document.body.appendChild(overlay);
}

function enableBackgroundScrolling() {
    // Enable scrolling on the background screen
    document.body.style.overflow = "auto";

    // Remove the overlay
    const overlay = document.querySelector("div[style*='background-color: rgba(0, 0, 0, 0.5)']");
    if (overlay) {
        overlay.remove();
    }
}
