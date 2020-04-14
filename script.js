//declare variable for some inner HTML elements to start the game
const gameStart = document.querySelector('.question-control');
const startButton = document.querySelector('.start-button');
const header = document.querySelector('.header');
let scoreBoard = document.querySelector('.score-board');
let scorePoint = document.querySelector('.point');
const winner = document.querySelector('.winner');
const tryAgain = document.querySelector('.try-again');
const tryAgainButton = document.querySelector('.try-again-button');
const showSuccessMessage = document.querySelector('.alert-success');
const info = document.querySelector('.info');
let questionOrder = document.querySelector('.question-order');
const start = document.querySelector('.start');

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
		question:
			'In which Disney movie is the song, “I Just Can’t Wait to be King”?',
		choiceA: 'The Legend of Tarzan',
		choiceB: 'Aladdin',
		choiceC: 'Shrek',
		choiceD: 'The Lion King',
		correct: 'D',
	},
	{
		question: 'Who is the princess who wears pants instead of a dress?',
		choiceA: 'Mulan',
		choiceB: 'Jasmine',
		choiceC: 'Pocahontas',
		choiceD: 'Anastasia',
		correct: 'B',
	},
	{
		question: 'What pattern is on Minnie Mouse’s skirt?',
		choiceA: 'Plain',
		choiceB: 'Ribbon',
		choiceC: 'Dots',
		choiceD: 'Flower',
		correct: 'C',
	},
	{
		question:
			'In Pinocchio, he and his father are consumed by a massive blue whale. What was its name?',
		choiceA: 'Figaro',
		choiceB: 'Geppetto',
		choiceC: 'Monstro',
		choiceD: 'Mangiafuoco',
		correct: 'C',
	},
	{
		question: 'How many daughters does King Triton have in The Little Mermaid?',
		choiceA: 'Seven',
		choiceB: 'Six',
		choiceC: 'Eight',
		choiceD: 'Five',
		correct: 'A',
	},
	{
		question:
			'Which Disney animated movie has a soundtrack that has gone ten times platinum according to the Recording Industry Association of America?',
		choiceA: 'Frozen',
		choiceB: 'The Lion King',
		choiceC: 'Tangled',
		choiceD: 'Zootopia',
		correct: 'B',
	},
	{
		question: 'What was the first ever Pixar film to be released?',
		choiceA: 'Tin Toy',
		choiceB: 'Toy Story',
		choiceC: 'Luxo Jr',
		choiceD: "Red's Dream",
		correct: 'C',
	},
	{
		question: 'Who and what was Bambi’s best friend?',
		choiceA: 'Faline',
		choiceB: 'Friend Owl',
		choiceC: 'Flower',
		choiceD: 'Thumper the rabbit',
		correct: 'D',
	},
	{
		question:
			'How long was the Genie stuck in the lamp before Aladdin released him?',
		choiceA: '10,000 Years',
		choiceB: '8000 Years',
		choiceC: '5000 Years',
		choiceD: '1000 Years',
		correct: 'A',
	},
];
//show questions by clicking start button
//add event listener for start button
startButton.addEventListener('click', showQuestion);
//call the showQuestion function
let questionNo = 1;
let gameContainer = document.querySelector('.game-container');
console.log(gameContainer);
function showQuestion() {
	gameContainer.style.display = 'grid';
	if (gameStart.style.display === 'none') {
		gameStart.style.display = 'block';
		scoreBoard.style.display = 'block';
		start.style.display = 'none';
		questionOrder.style.display = 'block';
		questionOrder.innerText = 'Question: ' + questionNo;
	} else {
		gameStart.style.display = 'none';
	}
	popUpQuestions();
	// countDown();
}

// call function for showing first question
const lastQuestion = questions.length - 1;
let questionsIndex = 0;
var popUpQuestions = function () {
	let q = questions[questionsIndex];
	askQuestion.innerText = q.question;
	answerA.innerText = q.choiceA;
	answerB.innerText = q.choiceB;
	answerC.innerText = q.choiceC;
	answerD.innerText = q.choiceD;
};

//declare a variable for answer buttons.
let answerButton = document.querySelector('.answers-container');

// add event listener to the answer buttons
answerButton.addEventListener('click', handleCheckAnswer);

//call function of handleCheckButtons
let currentScore = 0;
function handleCheckAnswer(event) {
	if (event.target.id === questions[questionsIndex].correct) {
		alert('Impressive!');
		currentScore += 10;
		scorePoint.innerText = currentScore;
		// event.target.style.backgroundColor = 'rgba(58,174,89,.5)'
	} else {
		// event.target.style.backgroundColor = 'rgba(255,0,0,.6)'
		alert('Sorry, it is the wrong answer.');
	}
	if (currentScore === 100) {
		winner.style.display = 'block';

		gameStart.style.display = 'none';
		header.style.display = 'none';
	}
	handleNextQuestion();
}

// call function of handleNextQuestion
function handleNextQuestion() {
	if (questionsIndex < lastQuestion) {
		questionsIndex++;
		popUpQuestions();
	} else if (questionsIndex === lastQuestion && currentScore < 100) {
		tryAgain.style.display = 'block';
		gameContainer.style.display = 'none';
		gameStart.style.display = 'none';
		questionOrder.style.display = 'none';
	}
	questionNo++;
	questionOrder.innerText = 'Question: ' + questionNo;
}

// set timer function.
// let sec = 10;
// function countDown() {
// 	let showTimer = document.querySelector('.timer');
// 	showTimer.innerText = sec;
//     let timer = setTimeout(timeIt, 1000);
//     function timeIt () {
//         sec = sec-1;
//         // showTimer.innerText = sec;
//     }
// 	if (sec < 1) {
//         clearTimeout(timer);
// 		// if (questionsIndex <= lastQuestion && currentScore < 100) {
// 		// 	tryAgain.style.display = 'block';
// 		// 	gameStart.style.display = 'none';
// 		// 	questionOrder.style.display = 'none';
// 		// }
// 	}
// }

//if score is under 100, show try again message
//add event listener to try again button
tryAgainButton.addEventListener('click', startOverGame);
//function to restart the game
function startOverGame() {
	// if it's the last question, reset the score and questionIndex from beginning
	if (questionsIndex === lastQuestion) {
		tryAgain.style.display = 'none';
		questionsIndex = 0;
		currentScore = 0;
		questionNo = 1;
		scorePoint.innerText = 0;
		showQuestion();
	}
}
