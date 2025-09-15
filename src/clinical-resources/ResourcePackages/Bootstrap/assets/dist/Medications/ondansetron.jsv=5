function calcOndansetron() {
	let mode = sessionStorage.getItem("patientmode");
	let weight = sessionStorage.getItem("patientweight");
	let geriatric = sessionStorage.getItem("patientgeriatric");
	
	if (mode == "Paediatric" && weight < 15) {
		var DoseOndansetronWafer = 0;
		var VolOndansetronWafer = 0;
		document.getElementById("DoseOndansetronWafer").parentElement.classList.add('medcontraid');
		var RepeatOndansetronWafer = "Not repeated";
	} else if (mode == "Paediatric" && weight > 14 && weight <= 30) {
		var DoseOndansetronWafer = "4 mg";
		var VolOndansetronWafer = "1 wafer";	
		var RepeatOndansetronWafer = "Not repeated";
	} else if (weight > 30 || mode == "Adult") {
		var DoseOndansetronWafer = "4 mg";
		var VolOndansetronWafer = "1 wafer";	
		var RepeatOndansetronWafer = "Repeat dose once after 30 minutes if required.";
		var DoseOndansetronIM = "4 mg";
		var VolOndansetronIM = "2 mL";
		var RepeatOndansetronIM = "Repeat dose once after 30 minutes if required.";
		var DoseOndansetronIV = "4";
		var VolOndansetronIV = "10";
		var RepeatOndansetronIV = "Repeat dose once after 30 minutes if required.";
	}

	if (mode == "Paediatric" && weight <= 19) {
		var DoseOndansetronIM = "1 mg";
		var VolOndansetronIM = "0.5 mL";
		var RepeatOndansetronIM = "Not repeated";
	} else if (mode == "Paediatric" && weight > 19 && weight <= 28) {
		var DoseOndansetronIM = "2 mg";
		var VolOndansetronIM = "1 mL";
		var RepeatOndansetronIM = "Not repeated";
	} else if (mode == "Paediatric" && weight > 29 && weight < 40) {
		var DoseOndansetronIM = "3 mg";
		var VolOndansetronIM = "1.5 mL";
		var RepeatOndansetronIM = "Not repeated";
	};

	if (mode == "Paediatric") {
		var DoseOndansetronIV = (weight * 0.1);
	if (DoseOndansetronIV != parseInt(DoseOndansetronIV)) DoseOndansetronIV = DoseOndansetronIV.toFixed(2);
		var VolOndansetronIV = ((DoseOndansetronIV / 4)*10);
	if (VolOndansetronIV != parseInt(VolOndansetronIV)) VolOndansetronIV = VolOndansetronIV.toFixed(2);		
		var RepeatOndansetronIM = "Not repeated";
		var RepeatOndansetronIV = "Not repeated";
	}

	if (weight < 12) {
		var DoseOndansetronIV = 0;
		var VolOndansetronIV = 0;
		var DoseOndansetronIM = 0;
		var VolOndansetronIM = 0;
		var DoseOndansetronWafer = 0;
		var VolOndansetronWafer = 0;

		document.getElementById("DoseOndansetronWafer").parentElement.classList.add('medcontraid');
		document.getElementById("DoseOndansetronIM").parentElement.classList.add('medcontraid');
		document.getElementById("DoseOndansetronIV").parentElement.classList.add('medcontraid');
		var DoseOndansetronWafer = 0;
	};
	// Place drug dosages into table
	document.getElementById("DoseOndansetronWafer").innerHTML = DoseOndansetronWafer;
	document.getElementById("VolOndansetronWafer").innerHTML = VolOndansetronWafer;
	document.getElementById("RepeatOndansetronWafer").innerHTML = RepeatOndansetronWafer;
	document.getElementById("DoseOndansetronIM").innerHTML = DoseOndansetronIM;
	document.getElementById("VolOndansetronIM").innerHTML = VolOndansetronIM;
	document.getElementById("RepeatOndansetronIM").innerHTML = RepeatOndansetronIM;
	document.getElementById("DoseOndansetronIV").innerHTML = DoseOndansetronIV + ' mg';
	document.getElementById("VolOndansetronIV").innerHTML = VolOndansetronIV+' mL';
	document.getElementById("RepeatOndansetronIV").innerHTML = RepeatOndansetronIV;	
}

function clearOndansetron() {
	document.getElementById("DoseOndansetronWafer").innerHTML = '';
	document.getElementById("VolOndansetronWafer").innerHTML = '';
	document.getElementById("DoseOndansetronIM").innerHTML = '';
	document.getElementById("VolOndansetronIM").innerHTML = '';
	document.getElementById("DoseOndansetronIV").innerHTML = '';
	document.getElementById("VolOndansetronIV").innerHTML = '';
	document.getElementById("RepeatOndansetronIV").innerHTML = '';
	document.getElementById("RepeatOndansetronIM").innerHTML = '';
	document.getElementById("RepeatOndansetronWafer").innerHTML = '';
};