
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

function changeInStatus(){
	var salaryRangeDiv = document.getElementById('salaryRange');
	var countryEmployedInDiv = document.getElementById('countryEmployedIn');
	
	//Suggested range taken from https://www.surveygizmo.com/resources/blog/how-to-write-better-demographic-questions/
	if (document.getElementById('workingStatus').checked){
		salaryRangeDiv.innerHTML = '<fieldset><label>Yearly Salary Range In USD</label><br><select><option value="less10k">Less than $10,000</option><option value="10kto19k">$10,000 to $19,999</option><option value="20kTo34k">$20,000 to $34,999</option><option value="35kTo49k">$35,000 to $49,999</option><option value="50kTo74k">$50,000 to $74,999</option><option value="75kTo99k">$75,000 to $99,999</option><option value="over100k">Over $100,000</option></select></fieldset><br>';
		
		countryEmployedInDiv.innerHTML = '<fieldset><label>Country you are employed in</label><br><select><option value="mexico">Mexico</option><option value="unitedStates">United States</option></select></fieldset><br>';
	}
	
	else{
		salaryRangeDiv.innerHTML = '';
		
		countryEmployedInDiv.innerHTML = '';
	}
	
	return;
}