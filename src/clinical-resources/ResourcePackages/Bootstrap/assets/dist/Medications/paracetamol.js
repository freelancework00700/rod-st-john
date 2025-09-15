function calcParacetamol() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// CPG administration per kilogram of drug
	var ConcParacetamol = 15;
	// Concentration (mcg/mg) per millilitre of drug
	var PresParacetamol = 100;
	//Unit of Measure per medication
	var UoMParacetamol = "mg";
	// Calculations of drug dosages
	var DoseParacetamol = (weight * ConcParacetamol);
	//Paracetamol
	if (weight < 8 || weight > 40) {
		var DoseParacetamol = 0
	};
	// Calculations of drug volumes
	var VolParacetamol = (DoseParacetamol / PresParacetamol);
	//Correct rounding issues
	if (DoseParacetamol != parseInt(DoseParacetamol)) DoseParacetamol = DoseParacetamol.toFixed(2);
	if (VolParacetamol != parseInt(VolParacetamol)) VolParacetamol = VolParacetamol.toFixed(2);
	// Place drug dosages into table
	document.getElementById("DoseParacetamol").innerHTML = DoseParacetamol + UoMParacetamol;
	//Volumes
	document.getElementById("VolParacetamol").innerHTML = VolParacetamol + "mL";
	//Setting contraindication class to all calculations where the dosage is set at zero.
	if (DoseParacetamol == 0) {
		document.getElementById("DoseParacetamol").parentElement.classList.add('medcontraid')
	};
}

function clearParacetamol() {
	document.getElementById("DoseParacetamol").innerHTML = '';
	document.getElementById("VolParacetamol").innerHTML = '';
};