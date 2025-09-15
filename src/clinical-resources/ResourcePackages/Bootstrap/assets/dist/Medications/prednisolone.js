function calcPrednisolone() {
	let mode = sessionStorage.getItem("patientmode");
	let weight = sessionStorage.getItem("patientweight");
	let geriatric = sessionStorage.getItem("patientgeriatric");

	var PresPrednisolone = 5;
	var ConcPrednisolone = 1;
	var DosePrednisolone = (weight * ConcPrednisolone);
	if (DosePrednisolone > 25) {
	DosePrednisolone = 25;
	}
	var VolPrednisolone = (DosePrednisolone / PresPrednisolone);
	
	if (mode == "Adult") {
	document.getElementById("DosePrednisolone").innerHTML = "Not indicated, used";
	document.getElementById("VolPrednisolone").innerHTML = "Paediatrics only.";
	} else {
	// Place drug dosages into table
	document.getElementById("DosePrednisolone").innerHTML = DosePrednisolone + "mg";
	document.getElementById("VolPrednisolone").innerHTML = VolPrednisolone + "mL";
	};
}

function clearPrednisolone() {
	document.getElementById("DosePrednisolone").innerHTML = '';
	document.getElementById("VolPrednisolone").innerHTML = '';
};