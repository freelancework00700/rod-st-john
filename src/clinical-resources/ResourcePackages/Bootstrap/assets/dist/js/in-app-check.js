document.addEventListener("DOMContentLoaded", function() {
	var browsingmode = location.host;
if (browsingmode == "clinical.stjohnwa.com.au") {
		var onlinebrowser = document.getElementsByClassName("app-browser-online");
		for (var i = 0; i < onlinebrowser.length; i++) {
		onlinebrowser[i].style.display = "initial";
		}
		var offlinebrowser = document.getElementsByClassName("app-browser-offline");
		for (var i = 0; i < offlinebrowser.length; i++) {
		offlinebrowser[i].style.display = "none";
		}
} else if (browsingmode == "localhost:8080") {
		var onlinebrowser = document.getElementsByClassName("app-browser-online");
		for (var i = 0; i < onlinebrowser.length; i++) {
		onlinebrowser[i].style.display = "none";
		}
		var offlinebrowser = document.getElementsByClassName("app-browser-offline");
		for (var i = 0; i < offlinebrowser.length; i++) {
		offlinebrowser[i].style.display = "initial";
		}
};
});