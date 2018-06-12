
var numberOfQuestion = 1;

function setKentQuestion(){
	var imageSection;
	var problemLbl;
	var questionLbl;
	var a1, a2, a3, a4, a5, a6;
	
	switch (numberOfQuestion){
		case 1:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion1.png" style="max-width: 55%;"></div>';
			problemLbl = "Above are 6 rows containing two identical sets of characters, but in one row, one character in the two sets is different.";
			questionLbl = "Which row has the difference?";
			
			a1 = "1";
			a2 = "2";
			a3 = "3";
			a4 = "4";
			a5 = "5";
			a6 = "6";
			
			break;	
			
		case 2:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion2.png" style="max-width: 55%;"></div>';
			problemLbl = "Above are 6 rows containing two identical sets of characters, but in one row, one character in the two sets is different."
			questionLbl = "Which row has the difference?";
			
			a1 = "1";
			a2 = "2";
			a3 = "3";
			a4 = "4";
			a5 = "5";
			a6 = "6";
				
			break;
			
		case 3:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion3.png" style="max-width: 55%;"></div>';
			problemLbl = "Above are 6 rows containing two identical sets of characters, but in one row, one character in the two sets is different.";
			questionLbl = "Which row has the difference?";
			
			a1 = "1";
			a2 = "2";
			a3 = "3";
			a4 = "4";
			a5 = "5";
			a6 = "6";
			
			break;
			
		case 4:
			
			imageSection = '';
			problemLbl = "Alan thinks of a number. He squares it, then takes away 5, next multiplies it by 4, takes away 7, divides it by 3, and finally adds 6. His answer is 9.";
			questionLbl = "What number did Alan start with?";
			
			a1 = "1";
			a2 = "2";
			a3 = "3";
			a4 = "4";
			a5 = "5";
			a6 = "6";
			
			break;
			
		case 5:
			
			imageSection = '';
			problemLbl = "If the hour hand of a clock is turned anticlockwise from 2 pm to 9 am, through how many degrees will it have turned?";
			questionLbl = "";
			
			a1 = "120";
			a2 = "135";
			a3 = "150";
			a4 = "165";
			a5 = "180";
			a6 = "205";
			
			break;
			
		case 6:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion6.png" style="max-width: 55%;"></div>';
			problemLbl = "What percentage of this shape is blue (to the nearest percent)?";
			questionLbl = "";
			
			a1 = "60";
			a2 = "63";
			a3 = "66";
			a4 = "69";
			a5 = "72";
			a6 = "75";
			
			break;
			
		case 7:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentAlphabet.png" style="max-width: 55%;"></div>';
			problemLbl = "If ADD = 9, BAD = 7, and CAD = 8";
			questionLbl = "what is the value of ADA?";
			
			a1 = "3";
			a2 = "4";
			a3 = "5";
			a4 = "6";
			a5 = "7";
			a6 = "8";
			
			break;
			
		case 8:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentAlphabet.png" style="max-width: 55%;"></div>';
			problemLbl = "If BAD = 10, DAC = 11, and CGI = 22";
			questionLbl = "what is the value of OCCAM?";
			
			a1 = "35";
			a2 = "36";
			a3 = "37";
			a4 = "39";
			a5 = "40";
			a6 = "None of these";
			
			break;
			
		case 9:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentAlphabet.png" style="max-width: 55%;"></div>';
			problemLbl = "If DATA = 52, CACHE = 40, and BIT = 62";
			questionLbl = "what is the value of BABBAGE?";
			
			a1 = "40";
			a2 = "41";
			a3 = "42";
			a4 = "43";
			a5 = "44";
			a6 = "None of these";
			
			break;
			
		case 10:
			
			imageSection = '';
			problemLbl = "You are facing North. Turn 90 degrees left. Turn 180 degrees right. Reverse direction. Turn 45 degrees left. Reverse direction. Turn 270 degrees right.";
			questionLbl = "In which direction are you now facing?";
			
			a1 = "N";
			a2 = "W";
			a3 = "SE";
			a4 = "SW";
			a5 = "NW";
			a6 = "None of these";
			
			break;
			
		case 11:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion11.png" style="max-width: 65%;"></div>';
			problemLbl = "";
			questionLbl = "What would the code be for a flight to Paris at 5 am for a vegetarian 8 year old girl travelling economy class?";
			
			a1 = "bYkR";
			a2 = "bykr";
			a3 = "bykR";
			a4 = "BykP";
			a5 = "aykR";
			a6 = "None of these";
			
			break;
			
		case 12:
			
			imageSection = '';
			problemLbl = "Three computers were lined up in a row. The Dell (D) was to the left of the Viglen (V) but not necessarily next to it. The blue computer was to the right of the white computer. The black computer was to the left of the Hewlett Packard (HP) PC. The Hewlett Packard was to the left of the Viglen (V).";
			questionLbl = "What was the order of the computers from left to right?";
			
			a1 = "V, HP, D";
			a2 = "V, D, HP";
			a3 = "HP, D, V";
			a4 = "HP, V, D";
			a5 = "D, V, HP";
			a6 = "D, HP, V";
			
			break;
			
		case 13:
			
			imageSection = '';
			problemLbl = "Tim was given a large bag of sweets and ate one third of the sweets before stopping as he was feeling sick. The next day he ate one third of the remaining sweets and the following day he ate one third of the remainder, before counting the sweets he had left which totalled eight.";
			questionLbl = "How many sweets was he given in the beginning?";
			
			a1 = "18";
			a2 = "21";
			a3 = "24";
			a4 = "27";
			a5 = "30";
			a6 = "33";
			
			break;
			
		case 14:
			
			imageSection = '';
			problemLbl = "In a counting system used by intelligent apes. A banana = 1. 6 is represented by an orange and 2 bananas. An orange is worth half a mango.";
			questionLbl = "What is the value of two mangos, an orange, and a banana?";
			
			a1 = "21";
			a2 = "24";
			a3 = "27";
			a4 = "30";
			a5 = "33";
			a6 = "36";
			
			break;
			
		case 15:
			
			imageSection = '';
			problemLbl = "In a counting system used by intelligent apes, a banana = 1. 6 is represented by an orange and 2 bananas. An orange is worth half a mango.";
			questionLbl = "What is the value in fruit, of two mangos with an orange, divided by an orange with a banana?";
			
			a1 = "A mango";
			a2 = "A banana";
			a3 = "An orange";
			a4 = "2 bananas";
			a5 = "3 bananas";
			a6 = "An orange & banana";
			
			break;
			
		case 16:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentAlphabet.png" style="max-width: 55%;"></div>';
			problemLbl = "If the code for JAVA is LCXC";
			questionLbl = "what is the code for BASIC?";
			
			a1 = "CBTJD";
			a2 = "DCUKE";
			a3 = "EDVLF";
			a4 = "FEWMG";
			a5 = "CDFFG";
			a6 = "None of these";
			
			break;
			
		case 17:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentAlphabet.png" style="max-width: 55%;"></div>';
			problemLbl = "If the code for FORTRAN is GMUPWUU";
			questionLbl = "what is the code for PASCAL?";
			
			a1 = "QYVYFG";
			a2 = "QCVGFR";
			a3 = "QCPGVR";
			a4 = "GMPGFR";
			a5 = "QCVXFF";
			a6 = "None of these";
			
			break;
			
		case 18:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentAlphabet.png" style="max-width: 55%;"></div>';
			problemLbl = "If the code for PHP is QLY.";
			questionLbl = "What is the code for SQL?";
			
			a1 = "TUU";
			a2 = "TUS";
			a3 = "TRM";
			a4 = "TUB";
			a5 = "VUS";
			a6 = "None of these";
			
			break;
			
		case 19:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentGrid.png" style="max-width: 65%;"></div>';
			problemLbl = "You start in square E6 facing East. Move 3 squares forward. Turn 90 degrees clockwise, move two squares forward, turn 180 degrees anticlockwise. Move 5 squares forward, turn 90 degrees anticlockwise. Move 4 squares forwards, turn 90 degrees clockwise. Move two squares backwards.";
			questionLbl = "What is the Y COORDINATE of the square you are now in?";
			
			a1 = "6";
			a2 = "7";
			a3 = "8";
			a4 = "9";
			a5 = "10";
			a6 = "11";
			
			break;
			
		case 20:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentGrid.png" style="max-width: 65%;"></div>';
			problemLbl = "You start in square E6 facing South West. Move three squares forward. Rotate 135 degrees clockwise. Move 4 squares forward. Rotate 45 degrees clockwise. Move 2 squares forward. Rotate 90 degrees anticlockwise and move 4 squares backwards.";
			questionLbl = "What is the X Coordinate of the square you are now in?";
			
			a1 = "C";
			a2 = "D";
			a3 = "E";
			a4 = "F";
			a5 = "G";
			a6 = "H";
			
			break;
			
		case 21:
			
			imageSection = '';
			problemLbl = "";
			questionLbl = "What is the angle between the hands of a clock at 10.30?";
			
			a1 = "75";
			a2 = "90";
			a3 = "105";
			a4 = "120";
			a5 = "135";
			a6 = "150";
			
			break;
			
		case 22:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion22.png" style="max-width: 65%;"></div>';
			problemLbl = "";
			questionLbl = "What percentage weight of chocolate out of the original kilogram will be contained in COMPLETELY FILLED boxes (i.e. those containing a full 6 bags)?";
			
			a1 = "58%";
			a2 = "60%";
			a3 = "62%";
			a4 = "64%";
			a5 = "66%";
			a6 = "68%";
			
			break;
			
		case 23:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion23-26.png" style="max-width: 65%;"></div>';
			problemLbl = "In these questions, the coordinates of the square or cell refer to its contents.";
			questionLbl = "What is  A4  multiplied by D3 divided by C2?";
			
			a1 = "24";
			a2 = "26";
			a3 = "28";
			a4 = "30";
			a5 = "33";
			a6 = "None of these";
			
			break;
			
		case 24:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion23-26.png" style="max-width: 65%;"></div>';
			problemLbl = "Store the answer to B4  plus  A2  in  F1. Store the answer to  A4  minus  D2  in  F3. Multiply  F1  by  F3.";
			questionLbl = "What is the final answer?";
			
			a1 = "17";
			a2 = "84";
			a3 = "96";
			a4 = "104";
			a5 = "108";
			a6 = "None of these";
			
			break;
			
		case 25:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion23-26.png" style="max-width: 65%;"></div>';
			problemLbl = "STEP 1: Multiply C3 by D4 and store the result in F4. STEP 2: Multiply F4 by 3, store the result in F4 then add 1 to E3. STEP 3: Repeat STEP 2 until the value of E3 equals 3 then stop.";
			questionLbl = "What is the value of F4?";
			
			a1 = "45";
			a2 = "345";
			a3 = "405";
			a4 = "450";
			a5 = "1215";
			a6 = "None of these";
			
			break;
			
		case 26:
			
			imageSection = '<div class="text-center"><img alt="Table with numbers" src="images/kentQuestion23-26.png" style="max-width: 65%;"></div>';
			problemLbl = "Add A1 + B3 + C4 + D2 and put the result in E2. Add A3 + B1 + C2 + D4 and place the result in E4. If the value of E4 is larger than E2 swop their contents, otherwise leave them as they are. Multiply E2 by D1, then take away A4 and place the result in F2";
			questionLbl = "What is the value of F2?";
			
			a1 = "79";
			a2 = "83";
			a3 = "86";
			a4 = "95";
			a5 = "96";
			a6 = "None of these";
			
			break;
			
		default:
			
			location.href = "pseudoCodeQuestion.html";
			
			break;
	}
	
	setQuestionKent(imageSection, problemLbl, questionLbl, a1, a2, a3, a4, a5, a6);
	numberOfQuestion ++;
	
	return;
}

function setQuestionKent(imageSection, problemLbl, questionLbl, a1, a2, a3, a4, a5, a6){
	//Set question
	document.getElementById('questionNumberLbl').innerHTML = "Question #" + numberOfQuestion;
	document.getElementById('imageSection').innerHTML = imageSection;
	document.getElementById('problemLbl').innerHTML = problemLbl;
	document.getElementById('questionLbl').innerHTML = questionLbl;
	
	//Set answers
	document.getElementById('a1Lbl').innerHTML = a1;
	document.getElementById('a2Lbl').innerHTML = a2;
	document.getElementById('a3Lbl').innerHTML = a3;
	document.getElementById('a4Lbl').innerHTML = a4;
	document.getElementById('a5Lbl').innerHTML = a5;
	document.getElementById('a6Lbl').innerHTML = a6;
	
	return;
}