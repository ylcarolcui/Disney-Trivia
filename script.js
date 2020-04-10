//declare variable for some inner HTML elements to start the game
const gameStart = document.querySelector('.question-control');
const startButton = document.querySelector('.start-button');
const nextButton = document.querySelector('.next-button');
const header = document.querySelector('.header');
let scoreBoard = document.querySelector('.score-board');
let scorePoint = document.querySelector('.point');

//declare variable for question and answers
let askQuestion = document.querySelector('.question');
let answerA = document.getElementById('A');
let answerB = document.getElementById('B');
let answerC = document.getElementById('C');
let answerD = document.getElementById('D');

//make questions
let questions = [
	{
		question:
			'Released in 1941, what is the only Disney animated feature film with a title character that never speaks?',
		choiceA: 'Mickey Mouse',
		choiceB: 'Dumbo',
		choiceC: 'Beauty and the Beast',
		choiceD: 'Herbie',
		correct: 'B',
	},
	{
		question: 'What is 2 + 2?',
		choiceA: '1',
		choiceB: '2',
		choiceC: '3',
		choiceD: '4',
		correct: 'D',
	},
	{
		question: 'what is correct answer?',
		choiceA: 'wrong',
		choiceB: 'correct',
		choiceC: 'wrong',
		choiceD: 'wrong',
		correct: 'B',
	},
	{
		question: 'what is my birth month?',
		choiceA: 'April',
		choiceB: 'February',
		choiceC: 'May',
		choiceD: 'October',
		correct: 'D',
	},
];
//show the question by clicking start button

//add event listener for start button
startButton.addEventListener('click', showQuestion);
//call the showQuestion function
function showQuestion(event) {
	if (gameStart.style.display === 'none') {
		gameStart.style.display = 'block';
		nextButton.style.display = 'block';
		scoreBoard.style.display = 'block';
		startButton.style.display = 'none';
		header.style.display = 'none';
	} else {
		gameStart.style.display = 'none';
	}
	showQuestions();
}

// call function for showing first question
const lastQuestion = questions.length - 1;
let questionsIndex = 0;
var showQuestions = function () {
	let q = questions[questionsIndex];
	askQuestion.innerText = q.question;
	answerA.innerText = q.choiceA;
	answerB.innerText = q.choiceB;
	answerC.innerText = q.choiceC;
	answerD.innerText = q.choiceD;
};

//declare a variable for answer button.
let answerButton = document.querySelector('.answers-container');

// add event listener to the answer buttons
answerButton.addEventListener('click', handleCheckAnswer);

//call function of handleCheckButtons
let currentScore = 0;
function handleCheckAnswer(event) {
	if (event.target.id === questions[questionsIndex].correct) {
		// alert('Impressive!');
		currentScore += 25;
		scorePoint.innerText = currentScore;
	} else {
		// alert('Sorry, it is the wrong answer.');
	}
	if (questionsIndex === lastQuestion) {
		nextButton.style.display = 'none';
	}
}
// add event listener to the next button.
nextButton.addEventListener('click', handleNextButton);
// call function of handleNextButton
function handleNextButton() {
	if (questionsIndex < lastQuestion) {
		questionsIndex++;
		showQuestions();
	}
}

//if the score is 100 showing winner message
//if the score is under 100 showing try again button
