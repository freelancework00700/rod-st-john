function calcRocuronium() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// CPG administration per kilogram of drug
	var ConcRocInduct = 1.2;
	var ConcRocInfus = 1;
	var ConcRocMainHi = 0.2;
	var ConcRocMainLo = 0.1;
	var ConcRocpostSux = 0.6;
	// Concentration (mcg/mg) per millilitre of drug
	var PresRocInduct = 10;
	var PresRocInfus = 2;
	var PresRocMain = 10;
	var PresRocpostSux = 10;
	//Unit of Measure per medication
	var UoMRocInduct = "mg";
	var UoMRocInfus = "mg";
	var UoMRocMain = "mg";
	var UoMRocpostSux = "mg";
	// Calculations of drug dosages
	var DoseRocInduct = (weight * ConcRocInduct).toFixed(2);
	var DoseRocInfus = (weight * ConcRocInfus).toFixed(2);
	var DoseRocMainHi = (weight * ConcRocMainHi).toFixed(2);
	var DoseRocMainLo = (weight * ConcRocMainLo).toFixed(2);
	var DoseRocpostSux = (weight * ConcRocpostSux).toFixed(2);
	// Calculations of drug volumes
	var VolRocInduct = (DoseRocInduct / PresRocInduct).toFixed(2);
	var VolRocInfus = (DoseRocInfus / PresRocInfus).toFixed(2);
	var VolRocMainHi = (DoseRocMainHi / PresRocMain).toFixed(2);
	var VolRocMainLo = (DoseRocMainLo / PresRocMain).toFixed(2);
	var VolRocpostSux = (DoseRocpostSux / PresRocpostSux).toFixed(2); 

	// Place drug dosages into table
	document.getElementById("DoseRocInduct").innerHTML = DoseRocInduct + UoMRocInduct;
	document.getElementById("DoseRocInfus").innerHTML = DoseRocInfus + UoMRocInfus;
	document.getElementById("DoseRocMainHi").innerHTML = DoseRocMainHi + UoMRocMain;
	document.getElementById("DoseRocMainLo").innerHTML = DoseRocMainLo;
	document.getElementById("DoseRocpostSux").innerHTML = DoseRocpostSux + UoMRocpostSux;
	//Presentations
	document.getElementById("PresRocInduct").innerHTML = PresRocInduct + UoMRocInduct;
	document.getElementById("PresRocInfus").innerHTML = PresRocInfus + UoMRocInfus;
	document.getElementById("PresRocMain").innerHTML = PresRocMain + UoMRocMain;
	document.getElementById("PresRocpostSux").innerHTML = PresRocpostSux + UoMRocpostSux;
	//Volumes
	document.getElementById("VolRocInduct").innerHTML = VolRocInduct + "mL";
	document.getElementById("VolRocInfus").innerHTML = VolRocInfus + "mL";
	document.getElementById("VolRocMainHi").innerHTML = VolRocMainHi + "mL";
	document.getElementById("VolRocMainLo").innerHTML = VolRocMainLo;
	document.getElementById("VolRocpostSux").innerHTML = VolRocpostSux + "mL";
	//Setting contraindication class to all calculations where the dosage is set at zero.
	var elements = [  { id: "DoseRocInduct", value: DoseRocInduct },  { id: "DoseRocInfus", value: DoseRocInfus },  { id: "DoseRocMainHi", value: DoseRocMainHi },  { id: "DoseRocMainLo", value: DoseRocMainLo },  { id: "DoseRocpostSux", value: DoseRocpostSux }];

	for (var i = 0; i < elements.length; i++) {
	  if (elements[i].value == 0) {
		document.getElementById(elements[i].id).parentElement.classList.add('medcontraid');
	  }
	}

}

function clearRocuronium() {
var elementIds = [  "DoseRocInduct", "DoseRocInfus", "DoseRocMainHi", "DoseRocMainLo",   "DoseRocpostSux", "PresRocInduct", "PresRocInfus", "PresRocMain",   "PresRocpostSux", "VolRocInduct", "VolRocInfus", "VolRocMainHi",   "VolRocMainLo", "VolRocpostSux"];

for (var i = 0; i < elementIds.length; i++) {
  document.getElementById(elementIds[i]).innerHTML = '';
}

};