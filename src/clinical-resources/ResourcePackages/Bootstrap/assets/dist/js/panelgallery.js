var timer;
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let markers = document.getElementsByClassName("marker");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < markers.length; i++) {
    markers[i].className = markers[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  markers[slideIndex-1].className += " active";
  captionText.innerHTML = markers[slideIndex-1].alt;
  clearTimeout(timer);
  timer = setTimeout(() => plusSlides(1), 3000);
}

var paneltimer;
var adpanelIndex = 1;
showadpanels(adpanelIndex);
function plusadpanels(n) {
  showadpanels(adpanelIndex += n);
}

function currentadpanel(n) {
  showadpanels(adpanelIndex = n);
}

function showadpanels(n) {
  var i;
  var adpanels = document.getElementsByClassName("myadpanels");
  var markers = document.getElementsByClassName("marker");
  if (n > adpanels.length) {
    adpanelIndex = 1
  }
  if (n < 1) {
    adpanelIndex = adpanels.length
  }
  for (i = 0; i < adpanels.length; i++) {
    adpanels[i].style.display = "none";
  }
  adpanels[adpanelIndex - 1].style.display = "block";
  clearTimeout(paneltimer);
  paneltimer = setTimeout(() => plusadpanels(1), 5000);
}