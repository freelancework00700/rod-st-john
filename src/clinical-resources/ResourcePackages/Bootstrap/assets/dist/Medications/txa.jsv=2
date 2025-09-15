function calcTXA() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// Resets "Medication Contraindicated (medcontraid) classes
	$('.medcontraid').removeClass('medcontraid');
	// CPG administration per kilogram of drug
	var ConcTXA = 15;
	// Concentration (mcg/mg) per millilitre of drug
	var PresTXA = 100;
	//Unit of Measure per medication
	var UoMTXA = "mg";
	// Calculations of drug dosages
	var DoseTXA = (weight * ConcTXA);
	// Subsequent rules applied to drug dosages
	//Dosages
	if (mode == "Adult") {
		var DoseTXA = 1000;
	}
	// Calculations of drug volumes
	var VolTXA = (DoseTXA / PresTXA);
	//Correct rounding issues
	if (DoseTXA != parseInt(DoseTXA)) DoseTXA = DoseTXA.toFixed(2);
	if (VolTXA != parseInt(VolTXA)) VolTXA = VolTXA.toFixed(2);
	// Place drug dosages into table
	document.getElementById("DoseTXA").innerHTML = DoseTXA + UoMTXA;
	//Presentations
	document.getElementById("PresTXA").innerHTML = PresTXA + UoMTXA;
	//Volumes
	document.getElementById("VolTXA").innerHTML = VolTXA + "mL";
	//Setting contraindication class to all calculations where the dosage is set at zero.
	if (DoseTXA == 0) {
		document.getElementById("DoseTXA").parentElement.classList.add('medcontraid')
	};
}

function clearTXA() {
	var elementIds = ["weight", "DoseTXA", "PresTXA", "VolTXA"];
	for (var i = 0; i < elementIds.length; i++) {
	  document.getElementById(elementIds[i]).innerHTML = '';
	}
};