function calcNaloxone() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// CPG administration per kilogram of drug
	const ConcNalxAdultLo = 10;
	const ConcNalxAdultHi = 20;
	const ConcNalxPaed = 10;
	const ConcNalxPaedRpt = 100;
	// Concentration (mcg/mg) per millilitre of drug
	const PresNalxIM = 400;
	const PresNalxIV = 40;
	//Unit of Measure per medication
	const UoMNalx = "mcg";

	var DoseNalxAdultIMLo = 0,
		DoseNalxAdultIMHi = 0,
		DoseNalxIVLo = 0,
		DoseNalxIVHi = 0,
		DoseNalxPaedIM = 0,
		DoseNalxPaedIV = 0,
		DoseNalxRpt = 0;
	
	if (mode == "Adult") {
		var DoseNalxAdultIMLo = 400,
			DoseNalxAdultIMHi = 800,
			DoseNalxIVLo = 400,
			DoseNalxIVHi = 800;
		document.getElementById("NaloxonePaedRepeat").style.display = "none";
		document.getElementById("PaedIM").style.display = "none";
		document.getElementById("AdultIM").style.display = "inherit";
		document.getElementById("PaedIV").style.display = "none";
		document.getElementById("AdultIV").style.display = "inherit";
	} else {
		var DoseNalxPaedIM = (weight * ConcNalxPaed);
		var VolNalxPaedIM = (DoseNalxPaedIM / PresNalxIM);
		var DoseNalxPaedIV = DoseNalxPaedIM;
		var VolNalxPaedIV = (DoseNalxPaedIV / PresNalxIV);
		var DoseNalxRpt = (DoseNalxPaedIV * 10);
		if (DoseNalxRpt > 2000) {
			DoseNalxRpt = 2000
		};
		var VolNalxRpt = (DoseNalxRpt / PresNalxIV);
		document.getElementById("NaloxonePaedRepeat").style.display = "inherit";
		document.getElementById("PaedIM").style.display = "inherit";
		document.getElementById("AdultIM").style.display = "none";
		document.getElementById("PaedIV").style.display = "inherit";
		document.getElementById("AdultIV").style.display = "none";
	};
	// Calculations of drug volumes
	var VolNalxPaedIM = (DoseNalxPaedIM / PresNalxIM);
	var VolNalxIMLo = (DoseNalxAdultIMLo / PresNalxIM);
	var VolNalxIMHi = (DoseNalxAdultIMHi / PresNalxIM);
	var VolNalxIVLo = (DoseNalxIVLo / PresNalxIV);
	var VolNalxIVHi = (DoseNalxIVHi / PresNalxIV);
	// Place drug dosages into table
	document.getElementById("DoseNalxAdultIMLo").innerHTML = DoseNalxAdultIMLo; 
	document.getElementById("DoseNalxPaedIM").innerHTML = DoseNalxPaedIM + UoMNalx; 
	document.getElementById("DoseNalxAdultIMHi").innerHTML = DoseNalxAdultIMHi + UoMNalx; 
	document.getElementById("DoseNalxIVLo").innerHTML = DoseNalxIVLo; 
	document.getElementById("DoseNalxIVHi").innerHTML = DoseNalxIVHi + UoMNalx; 
	document.getElementById("DoseNalxRpt").innerHTML = DoseNalxRpt + UoMNalx; 
	document.getElementById("DoseNalxPaedIV").innerHTML = DoseNalxPaedIV + UoMNalx; 
	//Presentations
	document.getElementById("PresNalxIM").innerHTML = PresNalxIM;
	document.getElementById("PresNalxIV").innerHTML = PresNalxIV;
	document.getElementById("PresNalxIV2").innerHTML = PresNalxIV;
	//Volumes
	document.getElementById("VolNalxPaedIM").innerHTML = VolNalxPaedIM + "mL"; 
	document.getElementById("VolNalxAdultIMLo").innerHTML = VolNalxIMLo; 
	document.getElementById("VolNalxAdultIMHi").innerHTML = VolNalxIMHi + "mL"; 
	document.getElementById("VolNalxIVLo").innerHTML = VolNalxIVLo; 
	document.getElementById("VolNalxIVHi").innerHTML = VolNalxIVHi + "mL"; 
	document.getElementById("VolNalxRpt").innerHTML = VolNalxRpt + "mL"; 
	document.getElementById("VolNalxPaedIV").innerHTML = VolNalxPaedIV + "mL"; 
}

function clearNaloxone() {
var elements = [
  "DoseNalxAdultIMLo",
  "DoseNalxPaedIM",
  "DoseNalxAdultIMHi",
  "DoseNalxIVLo",
  "DoseNalxIVHi",
  "DoseNalxRpt",
  "DoseNalxPaedIV",
  "PresNalxIM",
  "PresNalxIV",
  "PresNalxIV2",
  "VolNalxPaedIM",
  "VolNalxAdultIMLo",
  "VolNalxAdultIMHi",
  "VolNalxIVLo",
  "VolNalxIVHi",
  "VolNalxRpt",
  "VolNalxPaedIV"
];
elements.forEach((element) => {
  document.getElementById(element).innerHTML = '';
});
};