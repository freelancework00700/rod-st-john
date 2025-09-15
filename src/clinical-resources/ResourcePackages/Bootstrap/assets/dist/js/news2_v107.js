function newscalc() {
    var respratescore, sposcore, sbpscore, pulsescore, conscscore, tempscore, oxygenatedstatusscore, sumscore, outcome;
    var resprate = document.getElementById('resprate').value;
    var spo = document.getElementById('spo').value;
    var sbp = document.getElementById('sbp').value;
    var pulse = document.getElementById('pulse').value;
	var consciousness = document.getElementById('consciousness');
	var consc = consciousness.options[consciousness.selectedIndex].value;
    var temp = document.getElementById('temp').value;
    var spoadjust = document.querySelector('input[name="spocheck"]:checked').value;
	var oxygenatedstatus = document.querySelector('input[name="oxygenated"]:checked').value;
	
	var elements = document.getElementsByClassName('score'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "white";
		elements[i].style.color = "#333";
	}
	document.getElementById("ultimatescore").style.color = "inherit";
	document.getElementById("ultimatescore").style.backgroundColor = "inherit";
	document.getElementById("ultimatescore").style.fontWeight = "inherit";
	
    //Respiratory rules
    if (resprate > 0 && resprate <= 4) {
		respratescore = 3;
		document.getElementById("respratescore").style.backgroundColor = "red";
		document.getElementById("respratescore").style.color = "white";
	} else if (resprate > 4 && resprate <= 8) {
        var respratescore = 3;
    } else if (resprate > 8 && resprate <= 11) {
        var respratescore = 1;
    } else if (resprate > 11 && resprate <= 20) {
        var respratescore = 0;
    } else if (resprate > 20 && resprate <= 24) {
        var respratescore = 2;
    } else if (resprate > 24) {
        var respratescore = 3;
    }

	//Oxygenation Rule
	if (oxygenatedstatus == 0) {
		var oxygenatedstatusscore = 0;
	} else if (oxygenatedstatus == 1) {
		var oxygenatedstatusscore = 2;
	}

    //SpO2 rules (for COPD)
    if (spoadjust == 1) {
        if (spo > 0 && spo <= 83) {
            var sposcore = 3;
        } else if (spo == 84 || spo == 85) {
            var sposcore = 2;
        } else if (spo == 86 || spo == 87) {
            var sposcore = 1;
        } else if (spo > 87 && spo <= 92) {
            var sposcore = 0;
        } else if (spo > 92) {
			var sposcore = 0;
		}
    }
	
	if (spoadjust == 1 && oxygenatedstatus == 1) {
		console.log(spoadjust + oxygenatedstatus);
		if (spo == 93 || spo == 94) {
			var sposcore = 1;
		} else if (spo == 95 || spo == 96) {
			var sposcore = 2;
		} else if (spo > 96) {
			var sposcore = 3;
		}
	}

    //SpO2 rules (for no-COPD)
    if (spoadjust == 0) {
        if (spo >0 && spo <= 91) {
            var sposcore = 3;
        } else if (spo == 92 || spo == 93) {
            var sposcore = 2;
        } else if (spo == 94 || spo == 95) {
            var sposcore = 1;
        } else if (spo >= 96) {
            var sposcore = 0;
        }
    }

	//Heartrate
	if (pulse >0 && pulse <= 30) {
		var pulsescore = 3;
		document.getElementById("pulsescore").style.backgroundColor = "red";
		document.getElementById("pulsescore").style.color = "white";
	} else if (pulse > 30 && pulse <= 40) {
		var pulsescore = 3;
	} else if (pulse > 40 && pulse <= 50) {
		var pulsescore = 1;
	} else if (pulse > 50 && pulse <= 90) {
		var pulsescore = 0;
	} else if (pulse > 90 && pulse <= 110) {
		var pulsescore = 1;
	} else if (pulse > 110 && pulse <= 129) {
		var pulsescore = 2;
	} else if (pulse >= 130) {
		var pulsescore = 3;
	};
	
	//Systolic BP
	if (sbp > 0 && sbp <= 70) {
		var sbpscore = 3;
		document.getElementById("sbpscore").style.backgroundColor = "red";
		document.getElementById("sbpscore").style.color = "white";
	} else if (sbp > 70 && sbp <= 90) {
		var sbpscore = 3;
	} else if (sbp > 90 && sbp <= 100) {
		var sbpscore = 2;
	} else if (sbp >100 && sbp <= 110) {
		var sbpscore = 1;
	} else if (sbp >110 & sbp <= 219) {
		var sbpscore = 0;
	} else if (sbp > 219) {
		var sbpscore = 3;
	};
	
	//Consciousness
	if (consc == 0) {
		var conscscore = 0;
	} else if (consc == 1 || consc == 2) {
		var conscscore = 3;
	} else if (consc == 3) {
		conscscore = 3;
		document.getElementById("conscscore").style.backgroundColor = "red";
	document.getElementById("conscscore").style.color = "white";		
	};
	
	//Temperature
	if (temp > 0 && temp <= 35) {
		var tempscore = 3;
	} else if (temp >= 35.1 && temp <= 36.0) {
		var tempscore = 1;
	} else if (temp > 36 && temp <= 38.0) {
		var tempscore = 0;
	} else if (temp > 38.0 && temp <= 39.0) {
		var tempscore = 1;
	} else if (temp > 39) {
		var tempscore = 2;
	}

	//Add the lot & provide a response!
		
    if (!resprate || !spo || !sbp || !pulse || !consc || !temp) {
		var outcome = "Not enough values!"
    } else {
		var sumscore = sposcore + sbpscore + respratescore + pulsescore + conscscore + tempscore + oxygenatedstatusscore;
		document.getElementById("sumscore").innerHTML = sumscore;
	};
	
	if (consc == 3 || resprate <= 4 || pulse <= 30 || sbp <= 70) {
		var outcome = "EMERGENCY!";
		document.getElementById("ultimatescore").style.backgroundColor = "purple";
		document.getElementById("ultimatescore").style.color = "white";
		document.getElementById("ultimatescore").style.fontWeight = "bold";
		document.getElementById("sumscore").innerHTML = "E";
	} else if (consc == 2) {
		var outcome = "Red escalation";
		document.getElementById("ultimatescore").style.backgroundColor = "#FFC4C4";
	} else if (sumscore < 0) {
		var outcome = "Something's wrong!"
	}	else if ((sumscore >= 0 && sumscore < 5) && (sposcore == 3 || sbpscore == 3 || respratescore == 3 || pulsescore == 3 || conscscore == 3 || tempscore == 3)) {
		var outcome = "Amber escalation";
		document.getElementById("ultimatescore").style.backgroundColor = "#FFE1C0";
	} else if (sumscore >= 0 && sumscore < 5) {
		var outcome = "No escalation required";
	} else if (sumscore > 4 && sumscore < 7) {
		var outcome = "Amber escalation";
		document.getElementById("ultimatescore").style.backgroundColor = "#FFE1C0";
	} else if (sumscore > 6) {
		var outcome = "Red escalation";
		document.getElementById("ultimatescore").style.backgroundColor = "#FFC4C4";
	}

    if (!resprate || !spo || !sbp || !pulse || !consc || !temp) {
	var outcome = "Not enough values!"
	document.getElementById("ultimatescore").style.color = "inherit";
	document.getElementById("ultimatescore").style.backgroundColor = "inherit";
	document.getElementById("ultimatescore").style.fontWeight = "inherit";
    }
		
	document.getElementById("ultimatescore").innerHTML = outcome;
    document.getElementById("sposcore").innerHTML = sposcore;
    document.getElementById("sbpscore").innerHTML = sbpscore;
    document.getElementById("respratescore").innerHTML = respratescore;
    document.getElementById("pulsescore").innerHTML = pulsescore;
    document.getElementById("conscscore").innerHTML = conscscore;
    document.getElementById("tempscore").innerHTML = tempscore;
	document.getElementById("oxyscore").innerHTML = oxygenatedstatusscore;

//Update the table if anything changes
document.getElementById("consciousness").addEventListener("change", newscalc);
document.getElementById("pulse").addEventListener("change", newscalc);
document.getElementById("sbp").addEventListener("change", newscalc);
document.getElementById("resprate").addEventListener("change", newscalc);
document.getElementById("copd").addEventListener("change", newscalc);
document.getElementById("spo").addEventListener("change", newscalc);
document.getElementById("roomair").addEventListener("change", newscalc);
document.getElementById("oxygen").addEventListener("change", newscalc);
document.getElementById("temp").addEventListener("change", newscalc);

}
