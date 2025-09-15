function calcAdrenaline() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// CPG administration per kilogram of drug
	var ConcEpiAnaphyl = 10;
  var ConcEpiAnaphylPeri = 0.2;
	var ConcEpiOHCA = 10;
	if (mode == "Adult") {
		var epiconc = "1,000"
	} else if (mode == "Paediatric") {
		var epiconc = "10,000"
	};
	var ConcEpiROSC = 1;
	// Concentration (mcg/mg) per millilitre of drug
	var PresEpiAnaphyl = 1000;
	var PresEpiOHCA = 100;
	var PresEpiROSC = 100;
  var PresEpiAnaphylPeri = 100;
	//Unit of Measure per medication
	var UoMEpiAnaphyl = "microg";
	var UoMEpiOHCA = "microg";
	var UoMEpiROSC = "microg";
  var UoMEpiAnaphylPeri = "microg";
	//Presentation changes based on paed/adult
	if (mode == "Adult") {
		var PresEpiOHCA = 1000
	};
	// Calculations of drug dosages
	var DoseEpiAnaphyl = (weight * ConcEpiAnaphyl);
	var DoseEpiOHCA = (weight * ConcEpiOHCA);
	var DoseEpiROSC = (weight * ConcEpiROSC);
  var DoseEpiAnaphylPeri = (weight * ConcEpiAnaphylPeri);
	// Subsequent rules applied to drug dosages
	//Adult Settings
	//UoM
	if (mode == "Adult") {
		var UoMEpiOHCA = "mg",
			UoMEpiAnaphyl = "mg";
	}
	//Presentation
	if (mode == "Adult") {
		var PresEpiOHCA = 1,
			PresEpiAnaphyl = 1;
	}
	//Dosages
	if (mode == "Adult") {
		var DoseEpiAnaphyl = 0.5,
			DoseEpiOHCA = 1,
			DoseEpiROSC = 50,
      DoseEpiAnaphylPeri = 10;
	}
	// Calculations of drug volumes
	var VolEpiAnaphyl = (DoseEpiAnaphyl / PresEpiAnaphyl);
  var VolEpiAnaphylPeri = (DoseEpiAnaphylPeri / PresEpiAnaphylPeri);
	var VolEpiOHCA = (DoseEpiOHCA / PresEpiOHCA);
	var VolEpiROSC = (DoseEpiROSC / PresEpiROSC);
	//Correct rounding issues
	if (DoseEpiAnaphyl != parseInt(DoseEpiAnaphyl)) DoseEpiAnaphyl = DoseEpiAnaphyl.toFixed(2);
  if (DoseEpiAnaphylPeri != parseInt(DoseEpiAnaphylPeri)) DoseEpiAnaphylPeri = DoseEpiAnaphylPeri.toFixed(2);
	if (DoseEpiOHCA != parseInt(DoseEpiOHCA)) DoseEpiOHCA = DoseEpiOHCA.toFixed(2);
	if (DoseEpiROSC != parseInt(DoseEpiROSC)) DoseEpiROSC = DoseEpiROSC.toFixed(2);
	if (VolEpiAnaphyl != parseInt(VolEpiAnaphyl)) VolEpiAnaphyl = VolEpiAnaphyl.toFixed(2);
  if (VolEpiAnaphylPeri != parseInt(VolEpiAnaphylPeri)) VolEpiAnaphylPeri = VolEpiAnaphylPeri.toFixed(2);
	if (VolEpiOHCA != parseInt(VolEpiOHCA)) VolEpiOHCA = VolEpiOHCA.toFixed(2);
	if (VolEpiROSC != parseInt(VolEpiROSC)) VolEpiROSC = VolEpiROSC.toFixed(2);
	// Place drug dosages into table
	document.getElementById("DoseEpiAnaphyl").innerHTML = DoseEpiAnaphyl + UoMEpiAnaphyl;
  document.getElementById("DoseEpiAnaphylPeri").innerHTML = DoseEpiAnaphylPeri + UoMEpiAnaphylPeri;
	document.getElementById("DoseEpiOHCA").innerHTML = DoseEpiOHCA + UoMEpiOHCA;
	document.getElementById("DoseEpiROSC").innerHTML = DoseEpiROSC + UoMEpiROSC;
	//Presentations
	document.getElementById("epiconc").innerHTML = epiconc;
	//Volumes
	document.getElementById("VolEpiAnaphyl").innerHTML = VolEpiAnaphyl + "mL";
	document.getElementById("VolEpiOHCA").innerHTML = VolEpiOHCA + "mL";
	document.getElementById("VolEpiROSC").innerHTML = VolEpiROSC + "mL";
  document.getElementById("VolEpiAnaphylPeri").innerHTML = VolEpiAnaphylPeri + "mL";
	//Setting contraindication class to all calculations where the dosage is set at zero.
	if (DoseEpiAnaphyl == 0) {
		document.getElementById("DoseEpiAnaphyl").parentElement.classList.add('medcontraid')
	};
	if (DoseEpiOHCA == 0) {
		document.getElementById("DoseEpiOHCA").parentElement.classList.add('medcontraid')
	};
	if (DoseEpiROSC == 0) {
		document.getElementById("DoseEpiROSC").parentElement.classList.add('medcontraid')
	};
};
function clearAdrenaline() {
  const ids = [
    "DoseEpiAnaphyl",
    "DoseEpiOHCA",
    "DoseEpiROSC",
    "DoseEpiAnaphylPeri",
    "epiconc",
    "VolEpiAnaphyl",
    "VolEpiOHCA",
    "VolEpiROSC",
    "VolEpiAnaphylPeri"
  ];
  
  ids.forEach(id => {
    document.getElementById(id).innerHTML = ''; 
  });
};