function calcCefazolin() {
  const mode = sessionStorage.getItem("patientmode");
  const weight = sessionStorage.getItem("patientweight");

  // Drug parameters
  const ConcCefazolin = 50; // CPG administration per kilogram of drug (mg)
  const PresCefazolin = 100; // Concentration (mcg/mg) per millilitre of drug
  const UoMCefazolin = "mg"; // Unit of measure per medication

  // Calculate drug dose
  let DoseCefazolin = weight * ConcCefazolin;

  // Check dose against rules
  if (mode === "Paediatric" && DoseCefazolin > 2000) {
    DoseCefazolin = 2000;
    document.getElementById("DoseCefazolin").style.color = "red";
    document.getElementById("VolCefazolin").style.color = "red";
  } else {
    document.getElementById("DoseCefazolin").style.color = "inherit";
    document.getElementById("VolCefazolin").style.color = "inherit";
  }

  // Set adult dosage
  if (mode === "Adult") {
    DoseCefazolin = 2000;
  }

  // Calculate drug volume
  const VolCefazolin = DoseCefazolin / PresCefazolin;

  // Round dosage and volume
  const roundedDoseCefazolin = DoseCefazolin.toFixed(2);
  const roundedVolCefazolin = VolCefazolin.toFixed(2);

  // Display drug dosages and volume
  document.getElementById("DoseCefazolin").innerHTML = roundedDoseCefazolin + UoMCefazolin;
  document.getElementById("PresCefazolin").innerHTML = PresCefazolin + UoMCefazolin;
  document.getElementById("VolCefazolin").innerHTML = `${roundedVolCefazolin}mL, administered over 3-5mins.`;

  // Set contraindication class if dose is zero
  if (DoseCefazolin === 0) {
    document.getElementById("DoseCefazolin").parentElement.classList.add("medcontraid");
  }
}

function clearCefazolin() {
	document.getElementById("DoseCefazolin").innerHTML = '';
	document.getElementById("PresCefazolin").innerHTML = '';
	document.getElementById("VolCefazolin").innerHTML = '';
};