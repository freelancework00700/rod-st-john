function calcFentanyl() {
	let mode = sessionStorage.getItem("patientmode");
	let weight = sessionStorage.getItem("patientweight");
	let geriatric = sessionStorage.getItem("patientgeriatric");

if (geriatric == "true") {
  document.getElementById("GeriatricFentanyl").style.display = "revert";
  document.getElementById("AdultFentanyl").style.display = "none";
  } else {
  document.getElementById("GeriatricFentanyl").style.display = "none";
  document.getElementById("AdultFentanyl").style.display = "revert";
};

if (mode == "Paediatric") {
  document.getElementById("fentagequal1").style.display = "none";
  document.getElementById("PaedDoseLoadingIV").style.display = "inline-block";
  document.getElementById("PaedVolLoadingIV").style.display = "inline-block";
  } else {
  document.getElementById("fentagequal1").style.display = "revert";
  document.getElementById("PaedDoseLoadingIV").style.display = "none";
  document.getElementById("PaedVolLoadingIV").style.display = "none";
};

	// CPG administration per kilogram of drug
	var ConcFentInfMainHi = 2;
	var ConcFentInfMainLo = 1;
	var ConcFentIVLoad = 1;
	var ConcFentIVSub = 1;
	if (mode == "Adult") {
		var ConcFentRSILo = 1,
			ConcFentRSIHi = 3;
		document.getElementById("Fentadultrange").style.display = "inline-block";
	} else {
		var ConcFentRSILo = 1,
			ConcFentRSIHi = 1;
		document.getElementById("Fentadultrange").style.display = "none";
	};
	// Concentration (mcg/mg) per millilitre of drug
	var PresFentInfMain = 10;
	var PresFentIV = 10;
	var PresFentRSI = 10;
	//Unit of Measure per medication
	var UoMFentIN = "mcg";
	var UoMFentInfMain = "mcg";
	var UoMFentIV = "mcg";
	var UoMFentRSI = "mcg";
	// Calculations of drug dosages
	var DoseFentInfMainHi = (weight * ConcFentInfMainHi);
	var DoseFentInfMainLo = (weight * ConcFentInfMainLo);
	var DoseFentIVLoad = (weight * ConcFentIVLoad);
	var DoseFentIVSub = (weight * ConcFentIVSub);
	var DoseFentRSIHi = (weight * ConcFentRSIHi);
	var DoseFentRSILo = (weight * ConcFentRSILo);
	if (mode == "Adult" && DoseFentIVLoad >= 100) {
		var DoseFentIVLoad = 100
	};
	//Fentanyl Intranasal
	if (weight >= 0 && weight <= 20) {
		var DoseFentIN = 15,
			VolFentIN = 0.05,
			DoseFentINSub = 15,
			VolFentINSub = 0.05
	} else if (weight > 20 && weight <= 30) {
		var DoseFentIN = 30,
			VolFentIN = 0.1,
			DoseFentINSub = 30,
			VolFentINSub = 0.1
	} else if (weight > 30 && weight <= 40) {
		var DoseFentIN = 45,
			VolFentIN = 0.15,
			DoseFentINSub = 45,
			VolFentINSub = 0.15
	} else if (weight > 40 && geriatric == "false") {
		var DoseFentIN = 180,
			VolFentIN = "3x 0.2",
			DoseFentINSub = 60,
			VolFentINSub = 0.2
	} else if (geriatric == "true") {
		var DoseFentIN = 90,
			VolFentIN = "2x 0.15",
			DoseFentINSub = 45,
			VolFentINSub = 0.15
	};
	//Dosages
	if (mode == "Adult") {
		var DoseFentIVSub = 25;
	}
	// Calculations of drug volumes
	var VolFentInfMainHi = (DoseFentInfMainHi / PresFentInfMain);
	var VolFentInfMainLo = (DoseFentInfMainLo / PresFentInfMain);
	var VolFentIVLoad = (DoseFentIVLoad / PresFentIV);
	var VolFentIVSub = (DoseFentIVSub / PresFentIV);
	var VolFentRSIHi = (DoseFentRSIHi / PresFentRSI);
	var VolFentRSILo = (DoseFentRSILo / PresFentRSI);
	//---CONTRARULES---
	//FentanylIV
	if (weight >= 0 && weight <= 9) {
		var DoseFentIVLoad = 0,
			VolFentIVLoad = 0,
			DoseFentIVSub = 0,
			VolFentIVSub = 0;
	}
	//---AGE-BASED RULES---
	var DoseFentIVLoadHalf = (DoseFentIVLoad / 2);
	var VolFentIVLoadHalf = (VolFentIVLoad / 2);
	//Setting limit to Paediatric dosing
	if (mode == "Paediatric" && DoseFentIVLoad >= 25) {
		var DoseFentIVLoad = 25,
			DoseFentIVSub = 25;
			VolFentIVLoad = 2.5;
			VolFentIVSub = 2.5;
		document.getElementById("DoseFentIVLoad").style.color = "red";
		document.getElementById("VolFentIVLoad").style.color = "red";
		document.getElementById("DoseFentIVSub").style.color = "red";
		document.getElementById("VolFentIVSub").style.color = "red";
	} else {
		document.getElementById("DoseFentIVLoad").style.color = "inherit";
		document.getElementById("VolFentIVLoad").style.color = "inherit";
		document.getElementById("DoseFentIVSub").style.color = "inherit";
		document.getElementById("VolFentIVSub").style.color = "inherit";
	};
	//Correct rounding issues
	if (DoseFentInfMainHi != parseInt(DoseFentInfMainHi)) DoseFentInfMainHi = DoseFentInfMainHi.toFixed(2);
	if (DoseFentInfMainLo != parseInt(DoseFentInfMainLo)) DoseFentInfMainLo = DoseFentInfMainLo.toFixed(2);
	if (DoseFentIVLoad != parseInt(DoseFentIVLoad)) DoseFentIVLoad = DoseFentIVLoad.toFixed(2);
	if (DoseFentIVLoadHalf != parseInt(DoseFentIVLoadHalf)) DoseFentIVLoadHalf = DoseFentIVLoadHalf.toFixed(2);
	if (DoseFentIVSub != parseInt(DoseFentIVSub)) DoseFentIVSub = DoseFentIVSub.toFixed(2);
	if (DoseFentRSIHi != parseInt(DoseFentRSIHi)) DoseFentRSIHi = DoseFentRSIHi.toFixed(2);
	if (DoseFentRSILo != parseInt(DoseFentRSILo)) DoseFentRSILo = DoseFentRSILo.toFixed(2);
	if (VolFentInfMainHi != parseInt(VolFentInfMainHi)) VolFentInfMainHi = VolFentInfMainHi.toFixed(2);
	if (VolFentInfMainLo != parseInt(VolFentInfMainLo)) VolFentInfMainLo = VolFentInfMainLo.toFixed(2);
	if (VolFentIVLoad != parseInt(VolFentIVLoad)) VolFentIVLoad = VolFentIVLoad.toFixed(2);
	if (VolFentIVLoadHalf != parseInt(VolFentIVLoadHalf)) VolFentIVLoadHalf = VolFentIVLoadHalf.toFixed(2);
	if (VolFentIVSub != parseInt(VolFentIVSub)) VolFentIVSub = VolFentIVSub.toFixed(2);
	if (VolFentRSIHi != parseInt(VolFentRSIHi)) VolFentRSIHi = VolFentRSIHi.toFixed(2);
	if (VolFentRSILo != parseInt(VolFentRSILo)) VolFentRSILo = VolFentRSILo.toFixed(2);
	// Paediatric Halved Loading Dosages
	document.getElementById("DosePaedFentIVLoadHalf").innerHTML = DoseFentIVLoadHalf;
	document.getElementById("VolPaedFentIVLoadHalf").innerHTML = VolFentIVLoadHalf;
	// Place drug dosages into table
	document.getElementById("DoseFentIN").innerHTML = DoseFentIN + UoMFentIN;
	document.getElementById("DoseFentINSub").innerHTML = DoseFentINSub + UoMFentIN;
	document.getElementById("DoseFentInfMainHi").innerHTML = DoseFentInfMainHi + UoMFentInfMain;
	document.getElementById("DoseFentInfMainLo").innerHTML = DoseFentInfMainLo;
	document.getElementById("DoseFentIVLoad").innerHTML = DoseFentIVLoad + UoMFentIV;
	document.getElementById("DoseFentIVLoadHalf").innerHTML = DoseFentIVLoadHalf + UoMFentIV;
	document.getElementById("DoseFentIVSub").innerHTML = DoseFentIVSub + UoMFentIV;
	document.getElementById("DoseFentRSIHi").innerHTML = DoseFentRSIHi + UoMFentRSI;
	document.getElementById("DoseFentRSILo").innerHTML = DoseFentRSILo + UoMFentRSI;
	//Presentations
	document.getElementById("PresFentInfMain").innerHTML = PresFentInfMain + UoMFentInfMain;
	document.getElementById("PresFentRSI").innerHTML = PresFentRSI + UoMFentRSI;
	document.getElementById("VolFentIN").innerHTML = VolFentIN + "mL";
	document.getElementById("VolFentINSub").innerHTML = VolFentINSub + "mL";
	document.getElementById("VolFentInfMainHi").innerHTML = VolFentInfMainHi + "mL";
	document.getElementById("VolFentInfMainLo").innerHTML = VolFentInfMainLo;
	document.getElementById("VolFentIVLoad").innerHTML = VolFentIVLoad + "mL";
	document.getElementById("VolFentIVLoadHalf").innerHTML = VolFentIVLoadHalf + "mL";
	document.getElementById("VolFentIVSub").innerHTML = VolFentIVSub + "mL";
	document.getElementById("VolFentRSIHi").innerHTML = VolFentRSIHi + "mL";
	document.getElementById("VolFentRSILo").innerHTML = VolFentRSILo + "mL";
	//Setting contraindication class to all calculations where the dosage is set at zero.
	if (DoseFentIN == 0) {
		document.getElementById("DoseFentIN").parentElement.classList.add('medcontraid')
	};
	if (DoseFentINSub == 0) {
		document.getElementById("DoseFentINSub").parentElement.classList.add('medcontraid')
	};
	if (DoseFentInfMainHi == 0) {
		document.getElementById("DoseFentInfMainHi").parentElement.classList.add('medcontraid')
	};
	if (DoseFentInfMainLo == 0) {
		document.getElementById("DoseFentInfMainLo").parentElement.classList.add('medcontraid')
	};
	if (DoseFentIVLoad == 0) {
		document.getElementById("DoseFentIVLoad").parentElement.classList.add('medcontraid')
	};
	if (DoseFentIVLoadHalf == 0) {
		document.getElementById("DoseFentIVLoadHalf").parentElement.classList.add('medcontraid')
	};
	if (DoseFentIVSub == 0) {
		document.getElementById("DoseFentIVSub").parentElement.classList.add('medcontraid')
	};
	if (DoseFentRSIHi == 0) {
		document.getElementById("DoseFentRSIHi").parentElement.classList.add('medcontraid')
	};
	if (DoseFentRSILo == 0) {
		document.getElementById("DoseFentRSILo").parentElement.classList.add('medcontraid')
	};
}

function clearall() {
const elementIds = [
  "fentagequal1",
  "fentagequal2",
  "DoseFentIN",
  "DoseFentINSub",
  "DoseFentInfMainHi",
  "DoseFentInfMainLo",
  "DoseFentIVLoad",
  "DoseFentIVLoadHalf",
  "DoseFentIVSub",
  "DoseFentRSIHi",
  "DoseFentRSILo",
  "PresFentInfMain",
  "PresFentRSI",
  "VolFentIN",
  "VolFentINSub",
  "VolFentInfMainHi",
  "VolFentInfMainLo",
  "VolFentIVLoad",
  "VolFentIVLoadHalf",
  "VolFentIVSub",
  "VolFentRSIHi",
  "VolFentRSILo",
];

elementIds.forEach((id) => {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = "initial";
    element.innerHTML = "";
  }
});

};