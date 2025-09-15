function calcCalcium() {
  const mode = sessionStorage.getItem("patientmode");
  const weight = sessionStorage.getItem("patientweight");

  // CPG administration per kilogram of drug
  let ConcCalciumgluconate = 0.15; // mmol

  // Concentration of mmol per millilitre of drug
  const Prescalciumgluconate = 0.22;

  //Unit of Measure per medication
  const UoMCalciumgluconate = "mmol";

  // Calculations of drug dosages
  let DoseCalciumgluconate = weight * ConcCalciumgluconate;

  //Dosages
  if (mode === "Adult") {
    DoseCalciumgluconate = 2.2;
  }
  
  if (DoseCalciumgluconate > 2.2) {
    DoseCalciumgluconate = 2.2;
  }	

  // Calculations of drug volumes
  let Volcalciumgluconate = DoseCalciumgluconate / Prescalciumgluconate;

  //Correct rounding issues
  if (!Number.isInteger(DoseCalciumgluconate)) {
    DoseCalciumgluconate = DoseCalciumgluconate.toFixed(2);
  }

  if (!Number.isInteger(Volcalciumgluconate)) {
    Volcalciumgluconate = Volcalciumgluconate.toFixed(2);
  }

  // Place drug dosages into table
  document.getElementById("Dosecalciumgluconate").innerHTML = DoseCalciumgluconate + UoMCalciumgluconate;

  //Presentations
  document.getElementById("Prescalciumgluconate").innerHTML = Prescalciumgluconate + UoMCalciumgluconate;
  document.getElementById("Volcalciumgluconate").innerHTML = Volcalciumgluconate + "mL";

}

function clearCalcium() {
['Dosecalciumgluconate', 'Prescalciumgluconate', 'Volcalciumgluconate'].forEach(function(id) {
document.getElementById(id).innerHTML = '';
});

};