function calcKetamine() {
	var mode = sessionStorage.getItem("patientmode");
	var weight = sessionStorage.getItem("patientweight");
	// CPG administration per kilogram of drug
	var ConcKetAnalIM1 = 1;
	var ConcKetAnalIM2 = 0.5;
	var ConcKetAnalIV = 0.1;
	var ConcKetAnalIVRptLo = 0.1;
	var ConcKetAnalIVRptHi = 0.1;
	var ConcKetInfAnalLo = 0.1;
	var ConcKetInfAnalHi = 0.5;
	var ConcKetInfSedLo = 0.25;
	var ConcKetInfSedHi = 1;
	var ConcKetIVIOAnalLo = 0.1;
	var ConcKetIVIOAnalHi = 0.2;
	if (mode == "Adult") {
		var ConcKetProcAnal = 0.5;
		document.getElementById("PaedKetProcAnal").style.display = "none";
	} else {
		var ConcKetProcAnal = 0.2;
		document.getElementById("PaedKetProcAnal").style.display = "inherit";
	};
	if (mode == "Paediatric") {
		document.getElementById("SubsequentVolAdultOnly").style.display = "none";
		document.getElementById("SubsequentDoseAdultOnly").style.display = "none";
	} else {
		document.getElementById("SubsequentVolAdultOnly").style.display = "inline-block";
		document.getElementById("SubsequentDoseAdultOnly").style.display = "inline-block";
	};
	var ConcKetRSI = 2;
	var ConcKetSedIM = 2;
	var ConcKetSedIV = 0.5;
	var ConcKetTranq = 4;
	var ConcKetTranqETOH = 2;
	var ConcKetTranqMaint = 0.5;
	// Concentration (mcg/mg) per millilitre of drug
	var PresKetAnalIM1 = 100;
	var PresKetAnalIM2 = 100;
	var PresKetAnalIV = 10;
	var PresKetInfAnal = 4;
	var PresKetInfSed = 4;
	var PresKetIVIOAnal = 10;
	var PresKetProcAnal = 10;
	var PresKetRSI = 10;
	var PresKetSedIM = 100;
	var PresKetSedIV = 10;
	var PresKetTranq = 100;
	var PresKetTranqMaint = 10;
	//Unit of Measure per medication
	var UoMKetAnalIM1 = "mg";
	var UoMKetAnalIM2 = "mg";
	var UoMKetAnalIV = "mg";
	var UoMKetInfAnal = "mg";
	var UoMKetInfSed = "mg";
	var UoMKetIVIOAnal = "mg";
	var UoMKetProcAnal = "mg";
	var UoMKetRSI = "mg";
	var UoMKetSedIM = "mg";
	var UoMKetSedIV = "mg";
	var UoMKetTranq = "mg";
	var UoMKetTranqMaint = "mg";
	// Calculations of drug dosages
	var DoseKetAnalIM1 = (weight * ConcKetAnalIM1);
	var DoseKetAnalIM2 = (weight * ConcKetAnalIM2);
	var DoseKetAnalIVRptLo = (weight * ConcKetAnalIVRptLo);
	var DoseKetAnalIVRptHi = (weight * ConcKetAnalIVRptHi);	
	var DoseKetAnalIV = (weight * ConcKetAnalIV);
	var DoseKetAnalIVLo = 5;
	var DoseKetAnalIVHi = 20;
	var DoseKetInfAnalHi = (weight * ConcKetInfAnalHi);
	var DoseKetInfAnalLo = (weight * ConcKetInfAnalLo);
	var DoseKetInfSedHi = (weight * ConcKetInfSedHi);
	var DoseKetInfSedLo = (weight * ConcKetInfSedLo);
	var DoseKetIVIOAnalHi = (weight * ConcKetIVIOAnalHi);
	var DoseKetIVIOAnalLo = (weight * ConcKetIVIOAnalLo);
	var DoseKetProcAnal = (weight * ConcKetProcAnal);
	var DoseKetRSI = (weight * ConcKetRSI);
	var DoseKetSedIM = (weight * ConcKetSedIM);
	var DoseKetSedIV = (weight * ConcKetSedIV);
	var DoseKetTranq = (weight * ConcKetTranq);
	var DoseKetTranqETOH = (weight * ConcKetTranqETOH);
	var DoseKetTranqMaint = (weight * ConcKetTranqMaint);
	var AltdoseKetRSI = (DoseKetRSI / 2);
	var CommenceDoseKetInfAnal = (DoseKetInfAnalLo * 2);
	var CommenceDoseKetInfSed = (DoseKetInfSedLo * 2);
	var SubdoseKetIVIOAnalHi = 30;
	var SubdoseKetIVIOAnalLo = 10;
	var SubdoseKetProcAnal = (DoseKetProcAnal / 2);
// Subsequent rules applied to drug dosages
	//Ketamine for Tranquilisation
	if (mode == "Paediatric") {
	var DoseKetTranq = 0,
		DoseKetTranqMaint = 0,
		DoseKetTranqETOH = 0;
	}
//--PAEDIATRIC---
	if (mode == "Paediatric") {
		document.getElementById("SubdoseKetAdult").style.display = "none";
		document.getElementById("SubdoseKetPaed").style.display = "inline-block";
	} else {
		document.getElementById("SubdoseKetAdult").style.display = "inline-block";
		document.getElementById("SubdoseKetPaed").style.display = "none"
	};
	//Dosages
	if (mode == "Adult") {
		var DoseKetAnalIM1 = (weight * ConcKetAnalIM1),
			DoseKetAnalIM2 = (weight * ConcKetAnalIM2),
			DoseKetAnalIVRptLo = 5,
			DoseKetAnalIVRptHi = 10,
			DoseKetIVIOAnalLo = 10,
			DoseKetIVIOAnalHi = 20,
			DoseKetSedIV = (weight * ConcKetSedIV),
      DoseKetSedIM = (weight * ConcKetSedIM);
    if(weight > 100) {
    	var DoseKetTranq = (100 * ConcKetTranq),
	    DoseKetTranqETOH = (100 * ConcKetTranqETOH),
      DoseKetSedIM = (100 * ConcKetSedIM);
    }
	}
	//Set style parameters
	if (mode == "Adult") {
		document.getElementById("AdultKet").style.display = "inline-block";
		document.getElementById("PaedKet").style.display = "none";
	} else {
		document.getElementById("AdultKet").style.display = "none";
		document.getElementById("PaedKet").style.display = "inline-block"
	};
	// Calculations of drug volumes
	var VolKetAnalIM1 = (DoseKetAnalIM1 / PresKetAnalIM1);
	var VolKetAnalIM2 = (DoseKetAnalIM2 / PresKetAnalIM2);
	var VolKetAnalIV = (DoseKetAnalIV / PresKetAnalIV);
	var VolKetAnalIVRptLo = (DoseKetAnalIVRptLo / PresKetAnalIV);
	var VolKetAnalIVRptHi = (DoseKetAnalIVRptHi / PresKetAnalIV);
	var VolKetAnalIVLo = (DoseKetAnalIVLo / PresKetAnalIV);
	var VolKetAnalIVHi = (DoseKetAnalIVHi / PresKetAnalIV);
	var VolKetInfAnalHi = (DoseKetInfAnalHi / PresKetInfAnal);
	var VolKetInfAnalLo = (DoseKetInfAnalLo / PresKetInfAnal);
	var VolKetInfSedHi = (DoseKetInfSedHi / PresKetInfSed);
	var VolKetInfSedLo = (DoseKetInfSedLo / PresKetInfSed);
	var VolKetIVIOAnalHi = (DoseKetIVIOAnalHi / PresKetIVIOAnal);
	var VolKetIVIOAnalLo = (DoseKetIVIOAnalLo / PresKetIVIOAnal);
	var VolKetProcAnal = (DoseKetProcAnal / PresKetProcAnal);
	var VolKetRSI = (DoseKetRSI / PresKetRSI);
	var AltvolKetRSI = (VolKetRSI / 2);
	var VolKetSedIM = (DoseKetSedIM / PresKetSedIM);
	var VolKetSedIV = (DoseKetSedIV / PresKetSedIV);
	var VolKetTranq = (DoseKetTranq / PresKetTranq);
	var VolKetTranqETOH = (DoseKetTranqETOH / PresKetTranq);
	var VolKetTranqMaint = (DoseKetTranqMaint / PresKetTranqMaint);
	var CommenceVolKetInfAnal = (VolKetInfAnalLo * 2);
	var CommenceVolKetInfSed = (VolKetInfSedLo * 2);
	var SubvolKetIVIOAnalHi = (SubdoseKetIVIOAnalHi / PresKetIVIOAnal);
	var SubvolKetIVIOAnalLo = (SubdoseKetIVIOAnalLo / PresKetIVIOAnal);
	var SubvolKetProcAnal = (VolKetProcAnal / 2);
	//---CONTRARULES---
	//Ketamine
	if (weight >= 0 && weight <= 9) {
		var DoseKetAnalIM1 = 0,
			VolKetAnalIM1 = 0,
			DoseKetAnalIM2 = 0,
			VolKetAnalIM2 = 0,
			DoseKetAnalIV = 0,
			VolKetAnalIV = 0,
			DoseKetAnalIVRptLo = 0,
			VolKetAnalIVRptLo = 0,
			DoseKetAnalIVRptHi = 0,
			VolKetAnalIVRptHi = 0,
			DoseKetSedIM = 0,
			VolKetSedIM = 0,
			DoseKetSedIV = 0,
			VolKetSedIV = 0;
	}
	//Correct rounding issues
if (AltdoseKetRSI != parseInt(AltdoseKetRSI)) AltdoseKetRSI = AltdoseKetRSI.toFixed(2);
if (AltvolKetRSI != parseInt(AltvolKetRSI)) AltvolKetRSI = AltvolKetRSI.toFixed(2);
if (CommenceDoseKetInfAnal != parseInt(CommenceDoseKetInfAnal)) CommenceDoseKetInfAnal = CommenceDoseKetInfAnal.toFixed(2);
if (CommenceDoseKetInfSed != parseInt(CommenceDoseKetInfSed)) CommenceDoseKetInfSed = CommenceDoseKetInfSed.toFixed(2);
if (CommenceVolKetInfAnal != parseInt(CommenceVolKetInfAnal)) CommenceVolKetInfAnal = CommenceVolKetInfAnal.toFixed(2);
if (CommenceVolKetInfSed != parseInt(CommenceVolKetInfSed)) CommenceVolKetInfSed = CommenceVolKetInfSed.toFixed(2);
if (DoseKetAnalIM1 != parseInt(DoseKetAnalIM1)) DoseKetAnalIM1 = DoseKetAnalIM1.toFixed(2);
if (DoseKetAnalIM2 != parseInt(DoseKetAnalIM2)) DoseKetAnalIM2 = DoseKetAnalIM2.toFixed(2);
if (DoseKetAnalIV != parseInt(DoseKetAnalIV)) DoseKetAnalIV = DoseKetAnalIV.toFixed(2);
if (DoseKetAnalIVHi != parseInt(DoseKetAnalIVHi)) DoseKetAnalIVHi = DoseKetAnalIVHi.toFixed(2);
if (DoseKetAnalIVLo != parseInt(DoseKetAnalIVLo)) DoseKetAnalIVLo = DoseKetAnalIVLo.toFixed(2);
if (DoseKetInfAnalHi != parseInt(DoseKetInfAnalHi)) DoseKetInfAnalHi = DoseKetInfAnalHi.toFixed(2);
if (DoseKetInfAnalLo != parseInt(DoseKetInfAnalLo)) DoseKetInfAnalLo = DoseKetInfAnalLo.toFixed(2);
if (DoseKetInfSedHi != parseInt(DoseKetInfSedHi)) DoseKetInfSedHi = DoseKetInfSedHi.toFixed(2);
if (DoseKetInfSedLo != parseInt(DoseKetInfSedLo)) DoseKetInfSedLo = DoseKetInfSedLo.toFixed(2);
if (DoseKetIVIOAnalHi != parseInt(DoseKetIVIOAnalHi)) DoseKetIVIOAnalHi = DoseKetIVIOAnalHi.toFixed(2);
if (DoseKetIVIOAnalLo != parseInt(DoseKetIVIOAnalLo)) DoseKetIVIOAnalLo = DoseKetIVIOAnalLo.toFixed(2);
if (DoseKetProcAnal != parseInt(DoseKetProcAnal)) DoseKetProcAnal = DoseKetProcAnal.toFixed(2);
if (DoseKetRSI != parseInt(DoseKetRSI)) DoseKetRSI = DoseKetRSI.toFixed(2);
if (DoseKetTranq != parseInt(DoseKetTranq)) DoseKetTranq = DoseKetTranq.toFixed(2);
if (DoseKetTranqMaint != parseInt(DoseKetTranqMaint)) DoseKetTranqMaint = DoseKetTranqMaint.toFixed(2);
if (DoseKetSedIM != parseInt(DoseKetSedIM)) DoseKetSedIM = DoseKetSedIM.toFixed(2);
if (DoseKetSedIV != parseInt(DoseKetSedIV)) DoseKetSedIV = DoseKetSedIV.toFixed(2);
if (SubdoseKetIVIOAnalHi != parseInt(SubdoseKetIVIOAnalHi)) SubdoseKetIVIOAnalHi = SubdoseKetIVIOAnalHi.toFixed(2);
if (SubdoseKetIVIOAnalLo != parseInt(SubdoseKetIVIOAnalLo)) SubdoseKetIVIOAnalLo = SubdoseKetIVIOAnalLo.toFixed(2);
if (SubdoseKetProcAnal != parseInt(SubdoseKetProcAnal)) SubdoseKetProcAnal = SubdoseKetProcAnal.toFixed(2);
if (VolKetAnalIM1 != parseInt(VolKetAnalIM1)) VolKetAnalIM1 = VolKetAnalIM1.toFixed(2);
if (VolKetAnalIM2 != parseInt(VolKetAnalIM2)) VolKetAnalIM2 = VolKetAnalIM2.toFixed(2);
if (VolKetAnalIV != parseInt(VolKetAnalIV)) VolKetAnalIV = VolKetAnalIV.toFixed(2);
if (VolKetAnalIV != parseInt(VolKetAnalIVRptLo)) VolKetAnalIVRptLo = VolKetAnalIVRptLo.toFixed(2);
if (DoseKetAnalIVRptLo != parseInt(DoseKetAnalIVRptLo)) DoseKetAnalIVRptLo = DoseKetAnalIVRptLo.toFixed(2);
if (VolKetAnalIV != parseInt(VolKetAnalIVRptHi)) VolKetAnalIVRptHi = VolKetAnalIVRptHi.toFixed(2);
if (DoseKetAnalIVRptHi != parseInt(DoseKetAnalIVRptHi)) DoseKetAnalIVRptHi = DoseKetAnalIVRptHi.toFixed(2);
if (VolKetAnalIVHi != parseInt(VolKetAnalIVHi)) VolKetAnalIVHi = VolKetAnalIVHi.toFixed(2);
if (VolKetAnalIVLo != parseInt(VolKetAnalIVLo)) VolKetAnalIVLo = VolKetAnalIVLo.toFixed(2);
if (VolKetInfAnalHi != parseInt(VolKetInfAnalHi)) VolKetInfAnalHi = VolKetInfAnalHi.toFixed(2);
if (VolKetInfAnalLo != parseInt(VolKetInfAnalLo)) VolKetInfAnalLo = VolKetInfAnalLo.toFixed(2);
if (VolKetInfSedHi != parseInt(VolKetInfSedHi)) VolKetInfSedHi = VolKetInfSedHi.toFixed(2);
if (VolKetInfSedLo != parseInt(VolKetInfSedLo)) VolKetInfSedLo = VolKetInfSedLo.toFixed(2);
if (VolKetIVIOAnalHi != parseInt(VolKetIVIOAnalHi)) VolKetIVIOAnalHi = VolKetIVIOAnalHi.toFixed(2);
if (VolKetIVIOAnalLo != parseInt(VolKetIVIOAnalLo)) VolKetIVIOAnalLo = VolKetIVIOAnalLo.toFixed(2);
if (VolKetProcAnal != parseInt(VolKetProcAnal)) VolKetProcAnal = VolKetProcAnal.toFixed(2);
if (VolKetRSI != parseInt(VolKetRSI)) VolKetRSI = VolKetRSI.toFixed(2);
if (VolKetSedIM != parseInt(VolKetSedIM)) VolKetSedIM = VolKetSedIM.toFixed(2);
if (VolKetSedIV != parseInt(VolKetSedIV)) VolKetSedIV = VolKetSedIV.toFixed(2);
if (VolKetTranqMaint != parseInt(VolKetTranqMaint)) VolKetTranqMaint = VolKetTranqMaint.toFixed(2);
if (VolKetTranq != parseInt(VolKetTranq)) VolKetTranq = VolKetTranq.toFixed(2);
if (DoseKetTranqETOH != parseInt(DoseKetTranqETOH)) DoseKetTranqETOH = DoseKetTranqETOH.toFixed(2);
if (VolKetTranqETOH != parseInt(VolKetTranqETOH)) VolKetTranqETOH = VolKetTranqETOH.toFixed(2);
if (SubvolKetIVIOAnalHi != parseInt(SubvolKetIVIOAnalHi)) SubvolKetIVIOAnalHi = SubvolKetIVIOAnalHi.toFixed(2);
if (SubvolKetIVIOAnalLo != parseInt(SubvolKetIVIOAnalLo)) SubvolKetIVIOAnalLo = SubvolKetIVIOAnalLo.toFixed(2);
if (SubvolKetProcAnal != parseInt(SubvolKetProcAnal)) SubvolKetProcAnal = SubvolKetProcAnal.toFixed(2);

	// Place drug dosages into table

	document.getElementById("DoseKetAnalIM1").innerHTML = DoseKetAnalIM1 + UoMKetAnalIM1;
	document.getElementById("DoseKetAnalIM2").innerHTML = DoseKetAnalIM2 + UoMKetAnalIM2;
	document.getElementById("DoseKetAnalIVLo").innerHTML = DoseKetAnalIVLo;
	document.getElementById("DoseKetAnalIVHi").innerHTML = DoseKetAnalIVHi + UoMKetAnalIV;
	document.getElementById("DoseKetAnalIV").innerHTML = DoseKetAnalIV + UoMKetAnalIV;
	document.getElementById("DoseKetAnalIVRptLo").innerHTML = DoseKetAnalIVRptLo;
	document.getElementById("DoseKetAnalIVRptHi").innerHTML = DoseKetAnalIVRptHi + UoMKetAnalIV;
	document.getElementById("DoseKetInfAnalHi").innerHTML = DoseKetInfAnalHi + UoMKetInfAnal + ") per hour.";
	document.getElementById("DoseKetInfAnalLo").innerHTML = " (" + DoseKetInfAnalLo;
	document.getElementById("CommenceDoseKetInfAnal").innerHTML = " (" + CommenceDoseKetInfAnal + UoMKetInfAnal + ") per hour.";
	document.getElementById("DoseKetInfSedHi").innerHTML = DoseKetInfSedHi + UoMKetInfSed;
	document.getElementById("DoseKetInfSedLo").innerHTML = DoseKetInfSedLo;
	document.getElementById("CommenceDoseKetInfSed").innerHTML = " (" + CommenceDoseKetInfSed + UoMKetInfSed + ") per hour.";
	document.getElementById("DoseKetIVIOAnalHi").innerHTML = DoseKetIVIOAnalHi + UoMKetIVIOAnal;
	document.getElementById("DoseKetIVIOAnalLo").innerHTML = DoseKetIVIOAnalLo;
	if (mode == "Adult") {
		document.getElementById("DoseKetProcAnal").innerHTML = "Up to " + DoseKetProcAnal + UoMKetProcAnal;
	} else {
		document.getElementById("DoseKetProcAnal").innerHTML = DoseKetProcAnal + UoMKetProcAnal
	};
	document.getElementById("DoseKetRSI").innerHTML = "Haemodynamically stable: " + DoseKetRSI + UoMKetRSI;
	document.getElementById("AltdoseKetRSI").innerHTML = "Haemodynamically compromised: " + AltdoseKetRSI + UoMKetRSI;
	document.getElementById("DoseKetSedIM").innerHTML = DoseKetSedIM + UoMKetSedIM;
	document.getElementById("DoseKetSedIV").innerHTML = DoseKetSedIV + UoMKetSedIV;
	document.getElementById("DoseKetTranq").innerHTML = DoseKetTranq + UoMKetTranq;
	document.getElementById("DoseKetTranqETOH").innerHTML = DoseKetTranqETOH + UoMKetTranq;
	document.getElementById("DoseKetTranqMaint").innerHTML = DoseKetTranqMaint + UoMKetTranqMaint;

	//Presentations

	document.getElementById("PresKetInfAnal").innerHTML = PresKetInfAnal + UoMKetInfAnal;
	document.getElementById("PresKetInfSed").innerHTML = PresKetInfSed + UoMKetInfSed;
	document.getElementById("PresKetIVIOAnal").innerHTML = PresKetIVIOAnal + UoMKetIVIOAnal;
	document.getElementById("PresKetProcAnal").innerHTML = PresKetProcAnal + UoMKetProcAnal;
	document.getElementById("PresKetRSI").innerHTML = PresKetRSI + UoMKetRSI;
	document.getElementById("SubdoseKetIVIOAnalHi").innerHTML = SubdoseKetIVIOAnalHi + UoMKetIVIOAnal;
	document.getElementById("SubdoseKetIVIOAnalLo").innerHTML = DoseKetIVIOAnalLo;
	document.getElementById("SubdoseKetProcAnal").innerHTML = SubdoseKetProcAnal + UoMKetProcAnal;
	//Volumes
	document.getElementById("SubvolKetIVIOAnalHi").innerHTML = SubvolKetIVIOAnalHi + "mL";
	document.getElementById("SubvolKetIVIOAnalLo").innerHTML = SubvolKetIVIOAnalLo;
	document.getElementById("SubvolKetProcAnal").innerHTML = SubvolKetProcAnal + "mL";
	document.getElementById("VolKetAnalIM1").innerHTML = VolKetAnalIM1 + "mL";
	document.getElementById("VolKetAnalIM2").innerHTML = VolKetAnalIM2 + "mL";
	document.getElementById("VolKetAnalIV").innerHTML = VolKetAnalIV + "mL";
	document.getElementById("VolKetAnalIVRptLo").innerHTML = VolKetAnalIVRptLo;
	document.getElementById("VolKetAnalIVRptHi").innerHTML = VolKetAnalIVRptHi + "mL";
	document.getElementById("VolKetAnalIVLo").innerHTML = VolKetAnalIVLo;
	document.getElementById("VolKetAnalIVHi").innerHTML = VolKetAnalIVHi + "mL";
	document.getElementById("VolKetInfAnalHi").innerHTML = VolKetInfAnalHi + "mL";
	document.getElementById("VolKetInfAnalLo").innerHTML = VolKetInfAnalLo;
	document.getElementById("VolKetInfSedHi").innerHTML = VolKetInfSedHi + "mL";
	document.getElementById("VolKetInfSedLo").innerHTML = VolKetInfSedLo;
	document.getElementById("VolKetIVIOAnalHi").innerHTML = VolKetIVIOAnalHi + "mL";
	document.getElementById("VolKetIVIOAnalLo").innerHTML = VolKetIVIOAnalLo;
	if (mode == "Adult") {
		document.getElementById("VolKetProcAnal").innerHTML = VolKetProcAnal + "mL" + ". Subsequent dose 10mg after 2 min with further 10mg doses >1min intervals until adequate sedation is achieved."
	} else {
		document.getElementById("VolKetProcAnal").innerHTML = VolKetProcAnal + "mL";
	};
	document.getElementById("VolKetRSI").innerHTML = VolKetRSI + "mL";
	document.getElementById("AltvolKetRSI").innerHTML = AltvolKetRSI + "mL";
	document.getElementById("VolKetSedIM").innerHTML = VolKetSedIM + "mL";
	document.getElementById("VolKetSedIV").innerHTML = VolKetSedIV + "mL";
	document.getElementById("CommenceVolKetInfAnal").innerHTML = "Commence at " + CommenceVolKetInfAnal + "mL";
	document.getElementById("CommenceVolKetInfSed").innerHTML = "Commence at " + CommenceVolKetInfSed + "mL";
	document.getElementById("VolKetTranqETOH").innerHTML = VolKetTranqETOH + "mL";
	document.getElementById("VolKetTranq").innerHTML = VolKetTranq + "mL";
	document.getElementById("VolKetTranqMaint").innerHTML = VolKetTranqMaint + "mL";

	
	//Setting contraindication class to all calculations where the dosage is set at zero.
	if (DoseKetAnalIM1 == 0) {document.getElementById("DoseKetAnalIM1").parentElement.classList.add('medcontraid')};
	if (DoseKetAnalIM2 == 0) {document.getElementById("DoseKetAnalIM2").parentElement.classList.add('medcontraid')};
	if (DoseKetAnalIVLo == 0) {document.getElementById("DoseKetAnalIVLo").parentElement.classList.add('medcontraid')};
	if (DoseKetAnalIVHi == 0) {document.getElementById("DoseKetAnalIVHi").parentElement.classList.add('medcontraid')};
	if (DoseKetAnalIV == 0) {document.getElementById("DoseKetAnalIV").parentElement.classList.add('medcontraid')};
	if (DoseKetAnalIVRptLo == 0) {document.getElementById("DoseKetAnalIVRptLo").parentElement.classList.add('medcontraid')};
	if (DoseKetAnalIVRptHi == 0) {document.getElementById("DoseKetAnalIVRptHi").parentElement.classList.add('medcontraid')};
	if (DoseKetInfAnalHi == 0) {document.getElementById("DoseKetInfAnalHi").parentElement.classList.add('medcontraid')};
	if (DoseKetInfAnalLo == 0) {document.getElementById("DoseKetInfAnalLo").parentElement.classList.add('medcontraid')};
	if (CommenceDoseKetInfAnal == 0) {document.getElementById("CommenceDoseKetInfAnal").parentElement.classList.add('medcontraid')};
	if (DoseKetInfSedHi == 0) {document.getElementById("DoseKetInfSedHi").parentElement.classList.add('medcontraid')};
	if (DoseKetInfSedLo == 0) {document.getElementById("DoseKetInfSedLo").parentElement.classList.add('medcontraid')};
	if (CommenceDoseKetInfSed == 0) {document.getElementById("CommenceDoseKetInfSed").parentElement.classList.add('medcontraid')};
	if (DoseKetIVIOAnalHi == 0) {document.getElementById("DoseKetIVIOAnalHi").parentElement.classList.add('medcontraid')};
	if (DoseKetIVIOAnalLo == 0) {document.getElementById("DoseKetIVIOAnalLo").parentElement.classList.add('medcontraid')};
	if (DoseKetRSI == 0) {document.getElementById("DoseKetRSI").parentElement.classList.add('medcontraid')};
	if (AltdoseKetRSI == 0) {document.getElementById("AltdoseKetRSI").parentElement.classList.add('medcontraid')};
	if (DoseKetSedIM == 0) {document.getElementById("DoseKetSedIM").parentElement.classList.add('medcontraid')};
	if (DoseKetSedIV == 0) {document.getElementById("DoseKetSedIV").parentElement.classList.add('medcontraid')};
	if (DoseKetTranq == 0) {document.getElementById("DoseKetTranq").parentElement.classList.add('medcontraid')};
	if (DoseKetTranqETOH == 0) {document.getElementById("DoseKetTranqETOH").parentElement.classList.add('medcontraid')};
	if (DoseKetTranqMaint == 0) {document.getElementById("DoseKetTranqMaint").parentElement.classList.add('medcontraid')};
}

function clearKetamine() {
  var elements = document.querySelectorAll('[id^="DoseKet"], [id^="CommenceDoseKet"], [id^="PresKet"], [id^="SubdoseKet"], [id^="SubvolKet"], [id^="VolKet"]');
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = '';
  }
}

