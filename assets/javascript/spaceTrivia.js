//VARIABLES 
// ======================================================================
var arrayOfQuestions = [
	{question: "Which is the smallest planet in our solar system?",
	answers: ["Earth", "Neptune", "Mercury", "Venus"],
	rightAns: "Mercury"},
	{question: "How many moons does Mercury have?",
	answers: ["None", "1", "2", "9"],
	rightAns: "None"},
	// {question: "What is the name of the first chimpanzee in space?",
	// answers: ["Albert", "Patricia", "Mike", "Ham"],
	// rightAns: "Ham"},
	// {question: "What makes Neptune appear blue?",
	// answers: ["methane", "mercury", "hydrogen", "water"],
	// rightAns: "methane"}, 
	// {question: "Who was the first woman in space?",
	// answers: ["Anna Lee Fisher", "Valentina Tereshkova", "Sally Ride", "Judith Resnick"],
	// rightAns: "Valentina Tereshkova"}, 
	// {question: "What year did man first land on the moon?",
	// answers: ["1961", "1963", "1965", "1969"],
	// rightAns: "1969"},
	// {question: "What was the name of the Chinese lunar rover that landed on the moon in 2013?",
	// answers: ["Explorer", "Lunar 4 Probe", "Jade Rabbit", "Chang'e 3"],
	// rightAns: "Jade Rabbit"},
	// {question: "Which planets have rings?",
	// answers: ["Saturn and Mars", "Venus and Jupiter", "Mercury and Neptune", "Saturn, Jupiter, Uranus and Neptune"],
	// rightAns: "Saturn, Jupiter, Uranus and Neptune"}, 
	// {question: "In 2013 China became the third country to successfully 'soft-land' on the moon. When was the last time a country carried out a similar mission?",
	// answers: ["1961", "1976", "1983", "2007"],
	// rightAns: "1976"}, 
	// {question: "Five finalist for the Google Lunar X Prize will attempt to land a spacecraft on the moon. Synergy Moon, with members from 15 different countries, is one. Which country is NOT represented on its team?",
	// answers: ["Norway", "Malaysia", "Brazil", "Croatia"],
	// rightAns: "Norway"}
]

// arrayOfQuestions[0].question
// arrayOfQuestions[1].answers[0]

//timer variables
var ansTime = 30;
var intervalId;

//gaming variables
var correctCounter = 0;
var wrongCounter = 0;
var unAnswered = 0;
var playerGuess;

var currentIndex=0;//this is goign to eventually be incremented

//FUNCTIONS 
// ======================================================================

// function initGame(){
	// 	logQuest()
// }

//plug question from array into question div on html page
function logQues(){
	// for (var i = 0; i < arrayOfQuestions.length; i++) {
		var currentQuestion= arrayOfQuestions[currentIndex].question;
		console.log(currentQuestion);
		// $("#displayQues").html(arrayOfQuestions[currentIndex].question);
		// console.log(arrayOfQuestions[currentIndex].question);
	// }
}

// arrayOfQuestions[0].answers.length = 4;
// for (var i=0; i<4; i++)
function logAnswer(){
		// arrayOfQuestions[currentIndex].answers.length= 
		// arrayOfQuestions is the main array 
		// currentIndex is the number we're setting to choose one specific question.
		// answers is the value of arrayOfQuestions object which happens to be another array
	for (var i=0; i < arrayOfQuestions[currentIndex].answers.length; i++) {
		// for (var j=0; j < arrayOfQuestions[i].answers.length; j++){
		// $(".answer").html(arrayOfQuestions[i].answers);
		// console.log(arrayOfQuestions[0].answers);
		// console.log(arrayOfQuestions[1].answers);
		// console.log(arrayOfQuestions[i].answers);
		var currentAnswer = arrayOfQuestions[currentIndex].answers[i];
		console.log("current answer " + currentAnswer);
		var newDiv = $("<div>");
		// console.log("first answer to question" + currentIndex + " " + arrayOfQuestions[currentIndex].answers[0]);
		// console.log("second answer to question" + currentIndex + " " + arrayOfQuestions[currentIndex].answers[1]);
		// console.log("third answer to question"+ currentIndex + " " + arrayOfQuestions[currentIndex].answers[2]);
		// console.log("fourth answer to question"+ currentIndex + " " + arrayOfQuestions[currentIndex].answers[3]);
		// $("#ansChoice1").
		// }
	}
}

logQues();
logAnswer();



// incrementing currentAnswer (event that increments currentIndex)
// Display the question and answer we just console logged

// function thirtySecs(){
// //counting down in 1 sec increments
// 	intervalId = setInterval(decrement, 1000);
// }

// function decrement(){
// 	ansTime--;
// 	//the display the count-down
// 	$("#timer").html("<h2>Time Remaining: " + ansTime + "</h2>");
// 	//this is temporary
// 	// revealAns();
// 	if (ansTime === 0) {
// 	stop();
// 	}
// }

// thirtySecs();

//this is temporary
//I want the next page to automatically load when we run out of time
// function revealAns(event) {
// 	$("#timer").empty();
// 	$(".answer").empty();
// 	if (playerGuess === rightAns) {
// 		$("#timer").html("<h2>Correct!</h2>");
// 		correctCounter++;
// 		console.log(correctCounter);
// 	}
// 	else if (playerGuess !== rightAns){
// 		$("#timer").html("<h2>Nope!</h2>");
// 		$("#ansChoice1").html("<h3> The Correct Answer was: " + rightAns[i] + "</h3>");
// 		wrongCounter++;
// 		console.log(wrongCounter);
// 	}
// 	else (ansTime === 0) {
// 		$$("#ansChoice1").html("<h3> The Correct Answer was: " + rightAns[i] + "</h3>");
// 		unAnswered++;
// 		console.log(unAnswered);
// 	}
// }

// setTimeout(revealAns, 30000);

//If I ever got the rest of this working I would create a function for displaying the right and wrong answers

//MAIN PROCESS (this is where you have your function callbacks)
// ======================================================================
// initGame()