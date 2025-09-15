var c3name = "fontsize";
 function changeTSize(nu) {
  var el = document.getElementsByTagName('body')[0]; 
  var fontSizeString = window
     .getComputedStyle(el, null)
     .getPropertyValue('font-size');
  var fontSize = parseFloat(fontSizeString);
   if (nu == '0') {el.style.fontSize = '14px';   setCookie(c3name, '14', exdays);} else
   { 
   var fontsznew = fontSize + nu;
   el.style.fontSize = (fontsznew) + 'px';
   setCookie(c3name, fontsznew, exdays);
   }
 }