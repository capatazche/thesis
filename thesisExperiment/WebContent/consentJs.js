/**
 * 
 */

function checkConsentAnswer(){
	if	(document.getElementById('agreeRB').checked){
		location.href = "demoPage.html"
	}
	
	else {
		alert("Please agree to the consent form before continuing!")
	}
	
	return;
}