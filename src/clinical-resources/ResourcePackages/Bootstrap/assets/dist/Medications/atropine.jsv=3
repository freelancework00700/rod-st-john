function calcAtropine() {
    let mode = sessionStorage.getItem("patientmode");
    let weight = sessionStorage.getItem("patientweight");

	let presAtropine = 0.1;
    const uomAtropine = "mg";
	let concAtropineFrom = 0.01;
    let concAtropineTo = 0.02;

    let presAtropineBrady = 0.1;
    let concAtropineBrady = 0.02;
    const uomAtropineBrady = "mg";
	
    let doseAtropineFrom = weight * concAtropineFrom;
	let doseAtropineTo = weight * concAtropineTo;
    let doseAtropineBrady = weight * concAtropineBrady;

    if (mode === "Paediatric") {
        if (doseAtropineBrady >= 1) {
            doseAtropineBrady = 1;
            document.getElementById("DoseAtropineBrady").style.color = "red";
            document.getElementById("VolAtropineBrady").style.color = "red";
        } else if (doseAtropineBrady < 0.1) {
            doseAtropineBrady = 0.1;
            document.getElementById("DoseAtropineBrady").style.color = "red";
            document.getElementById("VolAtropineBrady").style.color = "red";
        };
		document.getElementById("PaedDose").style.display = "none";
		document.getElementById("PaedVol").style.display = "none";
		document.getElementById("PaedWarnings").style.display = "inherit";		
    } else if (mode === "Adult") {
		presAtropineBrady = 1.2;
		doseAtropineFrom = 1;
		doseAtropineTo = 2;
        doseAtropineBrady = 0.6;
		document.getElementById("PaedDose").style.display = "inline-block";
		document.getElementById("PaedVol").style.display = "inline-block";
		document.getElementById("PaedWarnings").style.display = "none";				
    }

    let volAtropineFrom = doseAtropineFrom / presAtropine;
	let volAtropineTo = doseAtropineTo / presAtropine;
    let volAtropineBrady = doseAtropineBrady / presAtropineBrady;

    doseAtropineFrom = doseAtropineFrom.toFixed(2);
	doseAtropineTo = doseAtropineTo.toFixed(2);
    volAtropineFrom = volAtropineFrom.toFixed(2);
	volAtropineTo = volAtropineTo.toFixed(2);
    doseAtropineBrady = doseAtropineBrady.toFixed(2);
    volAtropineBrady = volAtropineBrady.toFixed(2);

    document.getElementById("DoseAtropineFrom").innerHTML = doseAtropineFrom + uomAtropine;
	document.getElementById("DoseAtropineTo").innerHTML = doseAtropineTo + uomAtropine;
    document.getElementById("VolAtropineFrom").innerHTML = volAtropineFrom + "mL";
    document.getElementById("VolAtropineTo").innerHTML = volAtropineTo + "mL";

    document.getElementById("DoseAtropineBrady").innerHTML = doseAtropineBrady + uomAtropineBrady;
    document.getElementById("PresAtropineBrady").innerHTML = presAtropineBrady + uomAtropineBrady;
    document.getElementById("VolAtropineBrady").innerHTML = volAtropineBrady + "mL";

    if (doseAtropineFrom === 0) {
        document.getElementById("DoseAtropine").parentElement.classList.add("medcontraid");
    }
    if (doseAtropineBrady === 0) {
        document.getElementById("DoseAtropineBrady").parentElement.classList.add("medcontraid");
    }
}

function clearAtropine() {
    document.getElementById("DoseAtropineFrom").innerHTML = '';
    document.getElementById("DoseAtropineTo").innerHTML = '';	
    document.getElementById("VolAtropineFrom").innerHTML = '';
    document.getElementById("VolAtropineTo").innerHTML = '';
	document.getElementById("DoseAtropineBrady").innerHTML = '';
    document.getElementById("PresAtropineBrady").innerHTML = '';
    document.getElementById("VolAtropineBrady").innerHTML = '';
};