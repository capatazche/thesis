
var clicksOnContinue = 0;

function goToLastQuestion(){
	
	if(clicksOnContinue == 0){
		
		//Set up question
		document.getElementById('questionNumberLbl').innerHTML = 'Question #12';
		document.getElementById('textAreaForLast2Questions').value = '';
		
		document.getElementById('labelForLast2Questions').innerHTML = 'List all the other possible ways that the stores can be lined up in the four locations.';
		document.getElementById('textAreaForLast2Questions').value = '';
		
		//Set up graphic part of question
		document.getElementById('rightDivOfGaltPart2').innerHTML = '<label>In a new shopping center, 4 stores are going to be placed on the ground floor. A Barber Shop (B), a Discount Store (D), a Coffee Shop (C), and a Grocery Store (G) want to locate there.</label><div class="text-center"><img alt="Image with the 4 stores" src="images/shoppingCenter.jpg" style="width: 75%;"></div><br><label>One possible way that the stores could be arranged in the 4 locations is BDCG, which means the Barber Shop first, the Discount Store next, then the Coffee Shop, and the Grocery Store last.</label>';
		
		clicksOnContinue++;
	}
	
	else{
		location.href = "kentTestHtml.html";
	}
	
	
	return;
}