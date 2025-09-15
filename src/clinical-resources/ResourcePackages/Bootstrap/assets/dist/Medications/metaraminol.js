function calcMetaraminol() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// CPG administration per kilogram of drug	// CPG administration per kilogram of drug
	var ConcAramineIV = 0.01;
	var ConcAraminePaedInfus = 0.15;
	var ConcAraminePaedInfusMCGHi = 0.5;
	var ConcAraminePaedInfusMCGLo = 0.05;
	// Concentration (mcg/mg) per millilitre of drug
	var PresAramineInfus = 0.4;
	if (mode == "Adult") {
		var PresAramineIV = 0.5
	} else {
		var PresAramineIV = 0.1
	};
	//Unit of Measure per medication
	var UoMAramineInfus = "mg";
	var UoMAramineIV = "mg";
	// Calculations of drug dosages
	var DoseAramineIV = (weight * ConcAramineIV);
	var DoseAraminePaedInfus = (weight * ConcAraminePaedInfus);
	var DoseAraminePaedInfusMCGHi = (weight * ConcAraminePaedInfusMCGHi);
	var DoseAraminePaedInfusMCGLo = (weight * ConcAraminePaedInfusMCGLo);
	// Calculations of drug volumes
	var VolAramineIV = (DoseAramineIV / PresAramineIV);
	//Manual Aramine Settings
	if (mode == "Adult") {
		document.getElementById("AraminePaed").style.display = "none";
		document.getElementById("AramineAdult").style.display = "inherit";
		document.getElementById("AramineAdult").innerHTML = "0.50 to 1.00mg in 1.00 to 2.00mL, repeat >3min"
	} else if (mode == "Paediatric") {
		document.getElementById("AraminePaed").style.display = "inherit";
		document.getElementById("AramineAdult").style.display = "none"
	}
	if (mode == "Adult") {
		var DoseAramineInfusLo = 0.2,
			DoseAramineInfusHi = 2,
			VolAramineInfusLo = 0.5,
			VolAramineInfusHi = 5;
	} else if (mode == "Paediatric") {
		var DoseAramineInfusLo = 0,
			DoseAramineInfusHi = 0,
			VolAramineInfusLo = 0,
			VolAramineInfusHi = 0;
		document.getElementById("AramineInfusionAdult").style.display = "none";
		DoseAraminePaedInfus = DoseAraminePaedInfus.toFixed(2);
		DoseAraminePaedInfusMCGHi = DoseAraminePaedInfusMCGHi.toFixed(2);
		DoseAraminePaedInfusMCGLo = DoseAraminePaedInfusMCGLo.toFixed(2);
		document.getElementById("AramineInfusionPaed").innerHTML = "Dilute " + DoseAraminePaedInfus + "mg in 50mL.\nCommence at 1 to 10mL per hour (" + DoseAraminePaedInfusMCGLo + " to " + DoseAraminePaedInfusMCGHi + "mcg/min), titrate to haemodynamic status."
	}
	//Correct rounding issues
	if (DoseAramineIV != parseInt(DoseAramineIV)) DoseAramineIV = DoseAramineIV.toFixed(2);
	if (VolAramineIV != parseInt(VolAramineIV)) VolAramineIV = VolAramineIV.toFixed(2);
	// Place drug dosages into table
	document.getElementById("DoseAramineInfusHi").innerHTML = DoseAramineInfusHi + UoMAramineInfus;
	document.getElementById("DoseAramineInfusLo").innerHTML = DoseAramineInfusLo;
	document.getElementById("DoseAramineIV").innerHTML = DoseAramineIV + UoMAramineIV;
	//Presentations
	document.getElementById("PresAramineInfus").innerHTML = PresAramineInfus + UoMAramineInfus;
	document.getElementById("PresAramineIV").innerHTML = PresAramineIV + UoMAramineIV;
	document.getElementById("VolAramineInfusHi").innerHTML = VolAramineInfusHi + "mL";
	document.getElementById("VolAramineInfusLo").innerHTML = VolAramineInfusLo;
	document.getElementById("VolAramineIV").innerHTML = VolAramineIV + "mL";
	//Setting contraindication class to all calculations where the dosage is set at zero.
	if (DoseAramineInfusHi == 0) {
		document.getElementById("DoseAramineInfusHi").parentElement.classList.add('medcontraid')
	};
	if (DoseAramineInfusLo == 0) {
		document.getElementById("DoseAramineInfusLo").parentElement.classList.add('medcontraid')
	};
	if (DoseAramineIV == 0) {
		document.getElementById("DoseAramineIV").parentElement.classList.add('medcontraid')
	};
}

function clearall() {
const elementIds = [
  "AramineAdult",
  "AramineInfusionPaed",
  "DoseAramineInfusHi",
  "DoseAramineInfusLo",
  "DoseAramineIV",
  "PresAramineInfus",
  "PresAramineIV",
  "VolAramineInfusHi",
  "VolAramineInfusLo",
  "VolAramineIV",
];

elementIds.forEach((id) => {
  document.getElementById(id).innerHTML = "";
});

};