document.addEventListener("DOMContentLoaded", oxcon);
$('input[type="number"]').change(oxcon);
function oxcon() {
var oxygen = document.getElementById("oxygen").value;
var time = document.getElementById("minutes").value;  
var outcome = document.getElementById("outcome");  
var math = oxygen*(2*time) + ' litres';
document.getElementById("outcome").innerHTML = math;
}