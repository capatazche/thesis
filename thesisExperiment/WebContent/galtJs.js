//Some images were taken from https://crippen.education.ufl.edu/chemistry/galt.html

var numberOfQuestion = 1;

function setGALTquestionaire (){
	switch (numberOfQuestion){
		case 1:
			setQuestion1Galt();
			
			break;
		
		case 2:			
			setQuestion2Galt();
			
			break;	
		
		case 3:
			setQuestion3Galt();
			
			break;	
			
		case 4:
			setQuestion4Galt();
			
			break;		
			
		case 5:
			setQuestion5Galt();
			
			break;
			
		case 6:
			setQuestion6Galt();
			
			break;
			
		case 7:
			setQuestion7Galt();
			
			break;
			
		case 8:
			setQuestion8Galt();
			
			break;
		
		case 9:
			setQuestion9Galt();
			
			break;
			
		case 10:
			setQuestion10Galt();
			
			break;
		
		case 11:
			location.href = "kentIntro.html";
			
			break;
	}	
	
	numberOfQuestion ++;
	
	return;
}

function setQuestion1Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #1';
	document.getElementById('questionLabel').innerHTML = 'Which of these statements is true?';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = 'The pancake-shaped clay weighs more.';
	document.getElementById('a2Label').innerHTML = 'The two pieces weigh the same.';
	document.getElementById('a3Label').innerHTML = 'The ball weighs more.';
	
	//Hide fourth  and fifth radio buttons and labels since this question and the following only have 3 options
	document.getElementById('a4RB').style.visibility = 'hidden';
	document.getElementById('a4Label').style.visibility = 'hidden';
	document.getElementById('a5RB').style.visibility = 'hidden';
	document.getElementById('a5Label').style.visibility = 'hidden';
	
	//Furthermore, we also need to hide the fifth option for the reasons
	document.getElementById('r5RB').style.visibility = 'hidden';
	document.getElementById('r5Label').style.visibility = 'hidden';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'You did not add or take away any clay.';
	document.getElementById('r2Label').innerHTML = 'When clay 2 was flattened like a pancake, it had greater area.';
	document.getElementById('r3Label').innerHTML = 'When something is flattened, it loses weight.';
	document.getElementById('r4Label').innerHTML = 'Because of its density, the round ball had more clay in it.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>Tom has two balls of clay. They are the same size and shape. When he places them on the balance, they weigh the same.</label><div class="text-center"><img alt="Balls of clay in a balance" src="images/balanceTwoBallsOfClay.png" style="max-width: 65%;"></div><br><label>The balls of clay are removed from the balance pens. Clay 2 is flattened like a pancake.</label><div class="text-center"><img alt="One ball of clay and one flattened" src="images/twoBallsOfClay.png" style="max-width: 55%;"></div><br>';
	
	return;
}

function setQuestion2Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #2';
	document.getElementById('questionLabel').innerHTML = 'If the heavy weight is lowered into jar 2, what will happen?';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = 'The water will rise to a higher level than in jar 1.';
	document.getElementById('a2Label').innerHTML = 'The water will rise to a lower level than in jar 1.';
	document.getElementById('a3Label').innerHTML = 'The water will rise to the same level as in jar 1.';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'The weights are the same size so they will take up equal amounts of space.';
	document.getElementById('r2Label').innerHTML = 'The heavier the metal weight, the higher the water will rise.';
	document.getElementById('r3Label').innerHTML = 'The heavy metal weight has more pressure, therefore the water will rise lower.';
	document.getElementById('r4Label').innerHTML = 'The heavier the metal weight, the lower the water will rise.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>Linn has two jars. They are the same size and shape. Each is filled with the same amount of water.</label><div class="text-center"><img alt="Jar 1 with water" src="images/measuringJugWater.png"><img alt="Jar 2 with water" src="images/measuringJugWater2.png"></div><br><label>She also has two metal weighs of the same volume. One weight is light. The other is heavy.</label><div class="text-center"><img alt="Heavy ball" src="images/heavyWeightBall.png"><img alt="Light ball" src="images/lightWeightBall.png"></div><br><label>She lowers the light weight into jar 1. The water level in the jar rises and looks like this:</label><div class="text-center"><img alt="Jar with weight in it" src="images/jugWaterLightBall.png"><img alt="Jar 2 with water" src="images/measuringJugWater2.png"><img alt="Heavy ball" src="images/heavyWeightBall.png"></div><br>';
	
	return;
}

function setQuestion3Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #3';
	document.getElementById('questionLabel').innerHTML = 'How many large glasses of water does it take to fill the same small jar?';
	
	//From this question on, there is actually a fourth option to choose from at the answer section
	document.getElementById('a4RB').style.visibility = 'visible';
	document.getElementById('a4Label').style.visibility = 'visible';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = '4';
	document.getElementById('a2Label').innerHTML = '5';
	document.getElementById('a3Label').innerHTML = '6';
	document.getElementById('a4Label').innerHTML = 'Other';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'It takes five less small glasses of water to fill the small jar. So it will take five less large glasses of water to fill the same jar.';
	document.getElementById('r2Label').innerHTML = 'The ratio of small to large glasses will always be 5 to 3.';
	document.getElementById('r3Label').innerHTML = 'The small glass is half the size of the large glass. So it will take about half the number of small glasses of water to fill up the same small jar.';
	document.getElementById('r4Label').innerHTML = 'There is no way of predicting.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>The drawing shows two glasses, a small one and a large one. It also shows two jars, a small one and a large one.</label><div class="text-center"><img alt="Large jar" src="images/largeJar.jpg" style="max-width: 57%;"><img alt="Small jar" src="images/jar.jpg" style="max-width: 38%;"></div><div class="text-center"><img alt="Small glass" src="images/smallGlass.jpg" style="max-width: 20%;"><img alt="Large glass" src="images/largeGlass.jpg" style="max-width: 16%;"></div><br><label>It takes 15 small glasses of water or 9 large glasses of water to fill the large jar. It takes 10 small glasses of water to fill the small jar.</label>';
		
	return;
}

function setQuestion4Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #4';
	document.getElementById('questionLabel').innerHTML = 'Where would he hang a 5-unit weight to make the scale balance again?';
	
	//From this question on, there is actually a fifth option to choose from at the answer section
	document.getElementById('a5RB').style.visibility = 'visible';
	document.getElementById('a5Label').style.visibility = 'visible';
	
	//Furthermore, from this question on, we also have a fifth option for the reasons
	document.getElementById('r5RB').style.visibility = 'visible';
	document.getElementById('r5Label').style.visibility = 'visible';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = 'at point J';
	document.getElementById('a2Label').innerHTML = 'between K and L';
	document.getElementById('a3Label').innerHTML = 'at point L';
	document.getElementById('a4Label').innerHTML = 'between L and M';
	document.getElementById('a5Label').innerHTML = 'at point M';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'It is half the weight so it should be put at twice the distance.';
	document.getElementById('r2Label').innerHTML = 'The same distance as 10-unit weight, but in the opposite direction.';
	document.getElementById('r3Label').innerHTML = 'Hang the 5-unit weight further out, to make up its being smaller.';
	document.getElementById('r4Label').innerHTML = 'All the way at the end gives more power to make the scale balance.';
	document.getElementById('r5Label').innerHTML = 'The lighter the weight, the further out it should be hung.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>Joe has a scale like the one below</label><div class="text-center"><img alt="Scale" src="images/scale.png" style="max-width: 85%;"></div><br><label>When he hangs a 10-unit weight at point D, the scale looks like this:</label><div class="text-center"><img alt="Tilted scale because of weight" src="images/scale2.png" style="max-width: 85%;"></div><br>';
		
	return;
}

function setQuestion5Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #5';
	document.getElementById('questionLabel').innerHTML = 'Which string and weight would he use for his experiment?';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = 'string #1 and #2';
	document.getElementById('a2Label').innerHTML = 'string #1 and #3';
	document.getElementById('a3Label').innerHTML = 'string #2 and #3';
	document.getElementById('a4Label').innerHTML = 'between L and M';
	document.getElementById('a5Label').innerHTML = 'string #2 only';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'The length of the strings should be the same. The weights should be different.';
	document.getElementById('r2Label').innerHTML = 'Different lengths with different weights should be tested.';
	document.getElementById('r3Label').innerHTML = 'All strings and their weights should be tested against all others.';
	document.getElementById('r4Label').innerHTML = 'Only the longest string should be tested. The experiment is concerned with length not weight.';
	document.getElementById('r5Label').innerHTML = 'Everything needs to be the same except the length so you can tell if length makes a difference.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>Three strings are hung from a bar. String #1 and #3 are of equal length. String #2 is longer. Charlie attaches a 5-unit weight at the end of string #2 and at the end of #3. A 10-unit weight is attached at the end of string #1. Each string with a weight can be swung.</label><div class="text-center"><img alt="3 weights hanging from a bar" src="images/pendulumProblem.png" style="max-width: 90%;"></div><br><label>Charlie wants to find out if the length of the string has an effect on the amount of time it takes the string to swing back and forth.</label>';
		
	return;
}

function setQuestion6Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #6';
	document.getElementById('questionLabel').innerHTML = 'To test this, which ball would he now release from the high point?';
	
	//Hide third, fourth, and fifth radio buttons and labels since this question only has 2 options
	document.getElementById('a3RB').style.visibility = 'hidden';
	document.getElementById('a3Label').style.visibility = 'hidden';
	document.getElementById('a4RB').style.visibility = 'hidden';
	document.getElementById('a4Label').style.visibility = 'hidden';
	document.getElementById('a5RB').style.visibility = 'hidden';
	document.getElementById('a5Label').style.visibility = 'hidden';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = 'the heavy ball';
	document.getElementById('a2Label').innerHTML = 'the light ball';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'He started with the light ball, he should finish with it.';
	document.getElementById('r2Label').innerHTML = 'He used the light ball the first time. The next time he should use the heavy ball.';
	document.getElementById('r3Label').innerHTML = 'The heavy ball would have more force to hit the target ball farther.';
	document.getElementById('r4Label').innerHTML = 'The light ball would have to be released from the high point in order to make a fair comparison.';
	document.getElementById('r5Label').innerHTML = 'The same ball must be used as the weight of the ball does not count.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>Eddie has a curved ramp. At the bottom of the ramp there is one ball called the target ball. There are two other balls, a heavy and a light one. He can roll one ball down the ramp and hit the target ball. This causes the target ball to move up the other side of the ramp. He can roll the balls from two different point, a low point and a high point.</label><div class="text-center"><img alt="Ramp with target ball" src="images/halfPipe.png" style="max-width: 80%;"></div><br><label>Eddie released the light ball from the low point. It rolled down the ramp. It hit and pushed the target ball up the other side of the ramp.</label><div class="text-center"><img alt="Light ball at low point" src="images/halfPipe2.png" style="max-width: 80%;"><img alt="Light ball after hitting target ball" src="images/halfPipe3.png" style="max-width: 80%;"></div><br><label>He wants to find out if the point a ball is released from makes a difference in how far the target goes.</label>';
	
	return;
}

function setQuestion7Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #7';
	document.getElementById('questionLabel').innerHTML = 'What are the chances that this is a brown piece?';
	
	//Show third, fourth, and fifth radio buttons and labels since this question has 5 options
	document.getElementById('a3RB').style.visibility = 'visible';
	document.getElementById('a3Label').style.visibility = 'visible';
	document.getElementById('a4RB').style.visibility = 'visible';
	document.getElementById('a4Label').style.visibility = 'visible';
	document.getElementById('a5RB').style.visibility = 'visible';
	document.getElementById('a5Label').style.visibility = 'visible';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = '1 out of 3';
	document.getElementById('a2Label').innerHTML = '1 out of 4';
	document.getElementById('a3Label').innerHTML = '1 out of 7';
	document.getElementById('a4Label').innerHTML = '1 out of 21';
	document.getElementById('a5Label').innerHTML = 'other';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'There are twenty-one pieces in the cloth sack. One brown piece must be chosen from these.';
	document.getElementById('r2Label').innerHTML = 'One brown piece needs to be selected from a total of seven brown pieces.';
	document.getElementById('r3Label').innerHTML = 'Seven of the twenty-one pieces are brown pieces.';
	document.getElementById('r4Label').innerHTML = 'There are three sets in the cloth sack. One of them is brown.';
	document.getElementById('r5Label').innerHTML = '1/4 of the square pieces and 4/9 of the diamond pieces are brown.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>In a cloth sack, there are</label><div class="text-center"><img alt="Squares and diamonds in the sack" src="images/squaresAndDiamonds.png" style="max-width: 90%;"></div><br><label>All of the square pieces are the same size and shape. The diamond pieces are also the same size and shape. One piece is pulled out of the sack.</label>';
	
	return;
}

function setQuestion8Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #8';
	document.getElementById('questionLabel').innerHTML = 'What are the chances of pulling out a brown diamond or a white diamond?';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = '1 out of 3';
	document.getElementById('a2Label').innerHTML = '1 out of 9';
	document.getElementById('a3Label').innerHTML = '1 out of 21';
	document.getElementById('a4Label').innerHTML = '9 out of 21';
	document.getElementById('a5Label').innerHTML = 'other';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'Seven of the twenty-one pieces are brown or white diamonds.';
	document.getElementById('r2Label').innerHTML = '4/7 of the brown and 3/8 of the white are diamonds.';
	document.getElementById('r3Label').innerHTML = 'Nine of the twenty-one pieces are diamonds.';
	document.getElementById('r4Label').innerHTML = 'One diamond piece needs to be selected from a total of twenty-one pieces in the cloth sack.';
	document.getElementById('r5Label').innerHTML = 'There are 9 diamond pieces in the cloth sack. One piece must be chosen from these.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>In a cloth sack, there are</label><div class="text-center"><img alt="Squares and diamonds in the sack" src="images/squaresAndDiamonds.png" style="max-width: 90%;"></div><br><label>All of the square pieces are the same size and shape. The diamond pieces are also the same size and shape. Reach in and take the first piece you touch.</label>';
	
	return;
}

function setQuestion9Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #9';
	document.getElementById('questionLabel').innerHTML = 'Do you think there is a relation between the size of the mice and the color of their tails (that is, is one size of mouse more likely to have a certain color tail and vice versa)?';
	
	//Hide third, fourth, and fifth radio buttons and labels since this question only has 2 options
	document.getElementById('a3RB').style.visibility = 'hidden';
	document.getElementById('a3Label').style.visibility = 'hidden';
	document.getElementById('a4RB').style.visibility = 'hidden';
	document.getElementById('a4Label').style.visibility = 'hidden';
	document.getElementById('a5RB').style.visibility = 'hidden';
	document.getElementById('a5Label').style.visibility = 'hidden';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = 'Yes';
	document.getElementById('a2Label').innerHTML = 'No';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = '8/11 of the fat mice have black tails and 3/4 of the thin mice have white tails.';
	document.getElementById('r2Label').innerHTML = 'Fat and thin mice can have either a black or white tail.';
	document.getElementById('r3Label').innerHTML = 'Not all fat mice have black tails. Not all thin mice have white tails.';
	document.getElementById('r4Label').innerHTML = '18 mice have black tails and 12 have white tails.';
	document.getElementById('r5Label').innerHTML = '22 mice are fat and 8 mice are thin.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>A farmer observed the mice that live in his field. He found that the mice were either fat or thin. Also, the mice had either black tails or white tails.</label><label>This made him wonder if there might be a relation between the size of a mouse and the color of its tail. So he decided to capture all of the mice in one part of his field and observe them. The mice that he captured are shown below.</label><div class="text-center"><img alt="Image of all the mice" src="images/mice.png" style="max-width: 90%;"></div>';
	
	return;
}

function setQuestion10Galt(){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = 'Question #10';
	document.getElementById('questionLabel').innerHTML = 'Is there a relationship between the size of the fish and the kind of stripes it has (that is, is one size of fish more likely to have a certain type of stripes and vice versa)?';
	
	//Set answers
	document.getElementById('a1Label').innerHTML = 'Yes';
	document.getElementById('a2Label').innerHTML = 'No';
	
	//Set reasons
	document.getElementById('r1Label').innerHTML = 'Big and small fish can have either wide or narrow stripes.';
	document.getElementById('r2Label').innerHTML = '3/7 of the big fish and 9/21 of the small fish have wide stripes.';
	document.getElementById('r3Label').innerHTML = '7 fish are big and 21 are small.';
	document.getElementById('r4Label').innerHTML = 'Not all big fish have wide stripes and not all small fish have narrow stripes.';
	document.getElementById('r5Label').innerHTML = '12/28 of fish have wide stripes and 16/28 of fish have narrow stripes.';
	
	//Set up graphic part of question
	document.getElementById('rightDivOfGalt').innerHTML = '<label>Some of the fish below are big and some are small. Also some of the fish have wide stripes on their sides. Other have narrow stripes.</label><div class="text-center"><img alt="Big, small fish with either wide or narrow stripes" src="images/fish.jpg" style="width: 60%;"></div>';
	
	return;
}

function checkIfAnswer(){		
	var answerRBs = document.getElementsByName("answerGroup");
	var reasonRBs = document.getElementsByName("reasonGroup");
	
	var answerGiven = false;
	var reasonGiven = false;
	
	for (var i = 0; i < answerRBs.length; i++){
		if (answerRBs[i].checked){
			answerGiven = true;
		}
	}	
	
	for (var i = 0; i < reasonRBs.length; i++){
		if (reasonRBs[i].checked){
			reasonGiven = true;
		}
	}
	
	if (answerGiven && reasonGiven){
		cleanAnswers();
		setGALTquestionaire();
	}
	
	else{
		alert("Please select and answer and a reason for it!")
		return;
	}
}

function cleanAnswers(){
	var answerRBs = document.getElementsByName("answerGroup");
	var reasonRBs = document.getElementsByName("reasonGroup");
	
	for (var i = 0; i < answerRBs.length; i++){
		answerRBs[i].checked = false;
	}	
	
	for (var i = 0; i < reasonRBs.length; i++){
		reasonRBs[i].checked = false;
	}
}




