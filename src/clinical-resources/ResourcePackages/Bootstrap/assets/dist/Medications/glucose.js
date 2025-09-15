function calcGlucose() {
  var mode = sessionStorage.getItem("patientmode");
  var weight = sessionStorage.getItem("patientweight");

  const concentration = 0.2; // CPG administration per kilogram of drug
  const pres = 0.1; // Concentration (mcg/mg) per millilitre of drug
  const unit = "g"; // Unit of Measure per medication
  
  let dose, doseRpt, vol, volRpt;
  
  switch(mode){
    case "Newborn":
      dose = weight * concentration;
      doseRpt = dose;
      break;
    case "Paediatric":
      dose = weight * concentration;
      doseRpt = dose;
      break;
    default:
      dose = 15;
      doseRpt = 10;
  };
  
  vol = dose / pres;
  volRpt = doseRpt / pres;

  const doseElement = document.getElementById("DoseGlucose");
  doseElement.innerHTML = dose.toFixed(2) + unit;

  const doseRptElement = document.getElementById("DoseGlucoseRpt");
  doseRptElement.innerHTML = doseRpt.toFixed(2) + unit;

  const volElement = document.getElementById("VolGlucose");
  volElement.innerHTML = vol.toFixed(2) + "mL";

  const volRptElement = document.getElementById("VolGlucoseRpt");
  volRptElement.innerHTML = volRpt.toFixed(2) + "mL";

  if (dose === 0) {
    doseElement.parentElement.classList.add("medcontraid");
  }

  if (doseRpt === 0) {
    doseRptElement.parentElement.classList.add("medcontraid");
  }
}
function clearall() {
	// Resets "Medication Contraindicated (medcontraid) classes
	$('.medcontraid').removeClass('medcontraid');
	document.getElementById("DoseGlucagon").innerHTML = '';
	document.getElementById("DoseGluOHCA").innerHTML = '';
	document.getElementById("DoseGluOHCARpt").innerHTML = '';
	document.getElementById("DoseGlucose").innerHTML = '';
	document.getElementById("DoseGlucoseRpt").innerHTML = '';
	document.getElementById("VolGluOHCA").innerHTML = '';
	document.getElementById("VolGluOHCARpt").innerHTML = '';
	document.getElementById("VolGlucose").innerHTML = '';
	document.getElementById("VolGlucoseRpt").innerHTML = '';
}