function calcAmiodarone() {
  const mode = sessionStorage.getItem("patientmode");
  const weight = sessionStorage.getItem("patientweight");
  const concAmi = 1; // Amiodarone (not a weight-based administration)
  const concAmiOHCA = 5;
  const presAmi = 50;
  const presAmiOHCA = 50;
  const uoMAmi = "mg";
  const uoMAmiOHCA = "mg";
  let doseAmi = 300;
  let doseAmiOHCA = weight * concAmiOHCA;
  let doseAmiSub = weight * concAmiOHCA;

  // ADULT mode
  if (mode === "Adult") {
    doseAmiOHCA = 300;
    doseAmiSub = 150;
  }

  // Set style parameters
  if (mode === "Paediatric" && doseAmiSub >= 150) {
    doseAmiSub = 150;
    document.getElementById("DoseAmiSub").style.color = "red";
    document.getElementById("VolAmiSub").style.color = "red";
  } else {
    document.getElementById("DoseAmiSub").style.color = "inherit";
    document.getElementById("VolAmiSub").style.color = "inherit";
  }

  // Calculate drug volumes
  const volAmi = doseAmi / presAmi;
  const volAmiOHCA = doseAmiOHCA / presAmiOHCA;
  const volAmiSub = doseAmiSub / presAmiOHCA;

  // Round values
  [doseAmi, doseAmiOHCA, doseAmiSub, volAmi, volAmiOHCA, volAmiSub].forEach(value => {
    if (value !== parseInt(value)) {
      value = value.toFixed(2);
    }
  });

  // Place values into table
  document.getElementById("PresAmi").innerHTML = presAmi + uoMAmi;
  document.getElementById("PresAmiOHCA").innerHTML = presAmiOHCA + uoMAmi;
  document.getElementById("DoseAmi").innerHTML = doseAmi + uoMAmi;
  document.getElementById("DoseAmiOHCA").innerHTML = doseAmiOHCA + uoMAmiOHCA;
  document.getElementById("DoseAmiSub").innerHTML = doseAmiSub + uoMAmiOHCA;
  document.getElementById("VolAmi").innerHTML = `${volAmi}mL infusion over 20 minutes. Dilute into an appropriate volume of Dextrose 5% and administer accordingly.`;
  document.getElementById("VolAmiOHCA").innerHTML = volAmiOHCA + "mL";
  document.getElementById("VolAmiSub").innerHTML = volAmiSub + "mL";

  // Set contraindication class to all calculations where the dosage is set at zero.
  if (doseAmi === 0) {
    document.getElementById("DoseAmi").parentElement.classList.add('medcontraid');
  }
  if (doseAmiOHCA === 0) {
    document.getElementById("DoseAmiOHCA").parentElement.classList.add('medcontraid');
  }
  if (doseAmiSub === 0) {
		document.getElementById("DoseAmiSub").parentElement.classList.add('medcontraid')
	};
};
function clearAmiodarone() {
['DoseAmi', 'DoseAmiOHCA', 'DoseAmiSub', 'PresAmi', 'VolAmi', 'VolAmiOHCA', 'VolAmiSub'].forEach(id => {
  document.getElementById(id).innerHTML = '';
});

};