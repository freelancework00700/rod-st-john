function calcMorphineMidazolam() {
	let mode = sessionStorage.getItem("patientmode");
	let weight = sessionStorage.getItem("patientweight");
	let geriatric = sessionStorage.getItem("patientgeriatric");
	
	// CPG administration per kilogram of drug
	var ConcMorphMidazInfusLo = 0.1;
	var ConcMorphMidazInfusHi = 0.2;
	var ConcMorphMidazBolusLo = 0.05;
	var ConcMorphMidazBolusHi = 0.1;

	// Concentration (mcg/mg) per millilitre of drug
	var PresMorphMidaz = 1;
	//Unit of Measure per medication
	var UoMMorphMidaz = "mg";
	// Calculations of drug dosages
	var DoseMorphMidazInfusLo = (weight * ConcMorphMidazInfusLo);
	var DoseMorphMidazInfusHi = (weight * ConcMorphMidazInfusHi);
	var DoseMorphMidazBolusLo = (weight * ConcMorphMidazBolusLo);
	var DoseMorphMidazBolusHi = (weight * ConcMorphMidazBolusHi);
	// Calculations of drug volumes
	var VolMorphMidazInfusLo = (DoseMorphMidazInfusLo / PresMorphMidaz);
	var VolMorphMidazInfusHi = (DoseMorphMidazInfusHi / PresMorphMidaz);
	var VolMorphMidazBolusLo = (DoseMorphMidazBolusLo / PresMorphMidaz);
	var VolMorphMidazBolusHi = (DoseMorphMidazBolusHi / PresMorphMidaz);

	//Correct rounding issues
	if (VolMorphMidazInfusLo != parseInt(VolMorphMidazInfusLo)) VolMorphMidazInfusLo = VolMorphMidazInfusLo.toFixed(2);
	if (VolMorphMidazInfusHi != parseInt(VolMorphMidazInfusHi)) VolMorphMidazInfusHi = VolMorphMidazInfusHi.toFixed(2);
	if (VolMorphMidazBolusLo != parseInt(VolMorphMidazBolusLo)) VolMorphMidazBolusLo = VolMorphMidazBolusLo.toFixed(2);
	if (VolMorphMidazBolusHi != parseInt(VolMorphMidazBolusHi)) VolMorphMidazBolusHi = VolMorphMidazBolusHi.toFixed(2);
	if (DoseMorphMidazInfusLo != parseInt(DoseMorphMidazInfusLo)) DoseMorphMidazInfusLo = DoseMorphMidazInfusLo.toFixed(2);
	if (DoseMorphMidazInfusHi != parseInt(DoseMorphMidazInfusHi)) DoseMorphMidazInfusHi = DoseMorphMidazInfusHi.toFixed(2);
	if (DoseMorphMidazBolusLo != parseInt(DoseMorphMidazBolusLo)) DoseMorphMidazBolusLo = DoseMorphMidazBolusLo.toFixed(2);
	if (DoseMorphMidazBolusHi != parseInt(DoseMorphMidazBolusHi)) DoseMorphMidazBolusHi = DoseMorphMidazBolusHi.toFixed(2);

	//Placing onto page
	document.getElementById("PresMorphMidazInfus").innerHTML = PresMorphMidaz + "mg";
	document.getElementById("PresMorphMidazBolus").innerHTML = PresMorphMidaz + "mg";
	// Dosages
	document.getElementById("DoseMorphMidazInfusLo").innerHTML = DoseMorphMidazInfusLo + UoMMorphMidaz;
	document.getElementById("DoseMorphMidazInfusHi").innerHTML = DoseMorphMidazInfusHi + UoMMorphMidaz + "/hr";
	document.getElementById("DoseMorphMidazBolusLo").innerHTML = DoseMorphMidazBolusLo + UoMMorphMidaz;
	document.getElementById("DoseMorphMidazBolusHi").innerHTML = DoseMorphMidazBolusHi + UoMMorphMidaz;

	// Volumes
	document.getElementById("VolMorphMidazBolusLo").innerHTML = VolMorphMidazBolusLo;
	document.getElementById("VolMorphMidazBolusHi").innerHTML = VolMorphMidazBolusHi + "mL";
	document.getElementById("VolMorphMidazInfusLo").innerHTML = VolMorphMidazInfusLo;
	document.getElementById("VolMorphMidazInfusHi").innerHTML = VolMorphMidazInfusHi + "mL/hr";
}

function clearMorphineMidazolam() {
	document.getElementById("DoseMorphMidazInfusLo").innerHTML = '';
	document.getElementById("DoseMorphMidazInfusHi").innerHTML = '';
	document.getElementById("DoseMorphMidazBolusLo").innerHTML = '';
	document.getElementById("DoseMorphMidazBolusHi").innerHTML = '';
	document.getElementById("VolMorphMidazInfusLo").innerHTML = '';
	document.getElementById("VolMorphMidazBolusHi").innerHTML = '';
	document.getElementById("VolMorphMidazInfusLo").style.display = '';
	document.getElementById("VolMorphMidazInfusHi").innerHTML = '';
};