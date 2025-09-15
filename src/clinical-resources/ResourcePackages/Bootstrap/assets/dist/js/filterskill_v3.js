/**
  Hiding and showing the skills matrix for volunteers
  @author Matt Didcoe <matt.didcoe@stjohnwa.com.au>
  @version 0.1
**/

function showEMR() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableEMR" )){
  
  $('body').removeClass( "TableEMR" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
   $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(255, 246, 223)"]').parents('tr').show();
  $('body').addClass( "TableEMR" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showEMA() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableEMA" )){
  
  $('body').removeClass( "TableEMA" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(2),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(255, 192, 0)"]').parents('tr').show();
  $('body').addClass( "TableEMA" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(2),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showEHO() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableEHO" )){
  
  $('body').removeClass( "TableEHO" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(205, 237, 241)"]').parents('tr').show();
  $('body').addClass( "TableEHO" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showEMT() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableEMT" )){
  
  $('body').removeClass( "TableEMT" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(55, 184, 198)"]').parents('tr').show();
  $('body').addClass( "TableEMT" );
  $('table:first').find('th:nth-child(3),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showATO() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableATO" )){
  
  $('body').removeClass( "TableATO" );
  $('table:first').find('th:nth-child(2),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(251, 58, 5)"]').parents('tr').show();
  $('body').addClass( "TableATO" );
  $('table:first').find('th:nth-child(2),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showMedic() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableMedic" )){
  
  $('body').removeClass( "TableMedic" );
  $('table:first').find('th:nth-child(2),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(255, 113, 113)"]').parents('tr').show();
  $('body').addClass( "TableMedic" );
  $('table:first').find('th:nth-child(2),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showAO() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableAO" )){
  
  $('body').removeClass( "TableAO" );
  $('table:first').find('th:nth-child(2),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(255, 193, 224)"]').parents('tr').show();
  $('body').addClass( "TableAO" );
  $('table:first').find('th:nth-child(2),th:nth-child(4),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(9),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}


function showATP() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableATP" )){
  
  $('body').removeClass( "TableATP" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(10),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(153, 0, 0)"]').parents('tr').show();
  $('body').addClass( "TableATP" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(10),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showContract() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableContract" )){
  
  $('body').removeClass( "TableContract" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(11),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(51, 204, 51)"]').parents('tr').show();
  $('body').addClass( "TableContract" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(11),td:nth-child(12)').hide();
 }
}

function showAP() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableAP" )){
  
  $('body').removeClass( "TableAP" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(12)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(18, 128, 64)"]').parents('tr').show();
  $('body').addClass( "TableAP" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(12)').hide();
 }
}

function showCCP() {
jQuery('.switch').hide();
 if ($('body').hasClass( "TableCCP" )){
  
  $('body').removeClass( "TableCCP" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11)').show();
 } else {
  
  $('tr td[class*="notpermitted"]').parents('tr').show();
  $('tr td[style*="background-color: rgb(128, 0, 64)"]').parents('tr').show();
  $('body').addClass( "TableCCP" );
  $('table:first').find('th:nth-child(2),th:nth-child(3),td:nth-child(2),td:nth-child(3),td:nth-child(4),td:nth-child(5),td:nth-child(6),td:nth-child(7),td:nth-child(8),td:nth-child(9),td:nth-child(10),td:nth-child(11)').hide();
 }
}

$(window).ready(function(){
  $('td.MatrixEMR').click(showEMR);
  $('td.MatrixEMA').click(showEMA);
  $('td.MatrixEAO').click(showEHO);
  $('td.MatrixEMT').click(showEMT);
  $('td.MatrixATO').click(showATO);
  $('td.MatrixMedic').click(showMedic);
  $('td.MatrixAO').click(showAO);
  $('td.MatrixATP').click(showATP);
  $('td.MatrixContract').click(showContract);
  $('td.MatrixAP').click(showAP);
  $('td.MatrixCCP').click(showCCP);
});
