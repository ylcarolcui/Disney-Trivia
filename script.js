//show the question by clicking start button
const startButton = document.querySelector('.start-button')
//add event listener for start button
startButton.addEventListener('click', showQuestion)

function showQuestion() {
let gameStart = document.querySelector('.question-control')
let nextButton = document.querySelector('.next-button')
if (gameStart.style.display === 'none') {
    gameStart.style.display = 'block'
    nextButton.style.display = 'block'
    startButton.style.display = 'none'
} else {
    gameStart.style.display = 'none'
}
}