
function doneWithDemoGoToGalt(){
	location.href = "galtIntro.html";
	
	return;
}

function englishSecondLang(){	
	document.getElementById('englishProficiency').innerHTML = '<fieldset id="enlgish2ndLang"><label>How would you describe your proficiency in English?</label><br><input type="radio" id="engBeginner" name="enlgish2ndLang"><label for="engBeginner">A (Beginner)</label> <br><input type="radio" id="engIntermediate" name="enlgish2ndLang"><label for="engIntermediate">B (Intermediate)</label><br><input type="radio" id="engAdvanced" name="enlgish2ndLang"> <label for="engAdvanced">C (Advanced)</label></fieldset><br>';
	
	return;
}

function englishFirstLang(){	
	document.getElementById('englishProficiency').innerHTML = '';
	
	return;
}