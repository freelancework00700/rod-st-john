function calcSodiumBicarbonate() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// CPG administration per kilogram of drug
	var ConcSodiumbicarbonate = 84;
	// Concentration (mcg/mg) per millilitre of drug
	var Pressodiumbicarbonate = 84;
	//Unit of Measure per medication
	var UoMSodiumbicarbonate = "mg";
	// Calculations of drug dosages
	var DoseSodiumbicarbonate = (weight * ConcSodiumbicarbonate);
	//Dosages
	if (mode == "Adult") {
		var DoseSodiumbicarbonate = 8400;
	}
	// Calculations of drug volumes
	var Volsodiumbicarbonate = (DoseSodiumbicarbonate / Pressodiumbicarbonate);
	//Correct rounding issues
	if (DoseSodiumbicarbonate != parseInt(DoseSodiumbicarbonate)) DoseSodiumbicarbonate = DoseSodiumbicarbonate.toFixed(2);
	if (Volsodiumbicarbonate != parseInt(Volsodiumbicarbonate)) Volsodiumbicarbonate = Volsodiumbicarbonate.toFixed(2);
	// Place drug dosages into table
	document.getElementById("Dosesodiumbicarbonate").innerHTML = DoseSodiumbicarbonate + UoMSodiumbicarbonate;
	//Presentations
	document.getElementById("Pressodiumbicarbonate").innerHTML = Pressodiumbicarbonate + UoMSodiumbicarbonate;
	//Volumes
	document.getElementById("Volsodiumbicarbonate").innerHTML = Volsodiumbicarbonate + "mL";
	//Setting contraindication class to all calculations where the dosage is set at zero.
	if (Dosesodiumbicarbonate == 0) {
		document.getElementById("Dosesodiumbicarbonate").parentElement.classList.add('medcontraid')
	};
}

function clearSodiumBicarbonate() {
	var elementIds = ["Dosesodiumbicarbonate", "Pressodiumbicarbonate", "Volsodiumbicarbonate"];
	for (var i = 0; i < elementIds.length; i++) {
	  document.getElementById(elementIds[i]).innerHTML = '';
	}
};