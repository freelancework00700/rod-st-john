function calcOlanzapine() {
	let mode = sessionStorage.getItem("patientmode");
	let weight = sessionStorage.getItem("patientweight");
	let geriatric = sessionStorage.getItem("patientgeriatric");
	document.getElementById("trueadult").style.display = "initial";	
	document.getElementById("olderpaed").style.display = "initial";	
	document.getElementById("trueadult").innerHTML = "Adult (> 15 years) dose:";
	if (mode == "Adult" && geriatric == "true") {
		var DoseOlanzapine = "5mg";
		var VolOlanzapine = "1 wafer";
		document.getElementById("olderpaed").style.display = "none";
		document.getElementById("trueadult").innerHTML = "Adult (> 70 years) dose:";
	} else if (weight < 40) {
		var DoseOlanzapine = "ASMA Consult required";
		var VolOlanzapine = "as directed.";
		document.getElementById("olderpaed").style.display = "none";	
		document.getElementById("trueadult").style.display = "none";
	} else if (mode == "Adult" && geriatric == "false") {
		var DoseOlanzapine = "10mg";
		var VolOlanzapine = "2 wafers";
	} else if (mode == "Paediatric" && weight < 20) {
		document.getElementById("DoseOlanzapine").parentElement.classList.add('medcontraid');
		var DoseOlanzapine = 0;
	};

	// Place drug dosages into table
	document.getElementById("DoseOlanzapine").innerHTML = DoseOlanzapine;
	document.getElementById("VolOlanzapine").innerHTML = VolOlanzapine;

}

function clearOlanzapine() {
	document.getElementById("DoseOlanzapine").innerHTML = '';
	document.getElementById("VolOlanzapine").innerHTML = '';
};