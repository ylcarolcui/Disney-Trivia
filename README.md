# Carol Cui-project1

## Disney Trivia Game

Used following technologies:

- HTML
- CSS
- Javascript

The approach taken:

- start the game by press the Start button
- show the questions with answer container for 10 total questions
- gain 10 point by answering the correct answer
- if the user doesn't get 100 points, user can start over the game by clicking 'Try Again' button.
- if the user score 100 points, will show winner message.

Unsolved problems:

- CSS styling failed for cell phone view of question container.
- Could not solve the code for Timer functionality which I want the Timer to be count down 10 sec for each questions.

```
let sec = 10;
function countDown() {
	let showTimer = document.querySelector('.timer');
	showTimer.innerText = sec;
    let timer = setTimeout(timeIt, 1000);
    function timeIt () {
        sec = sec-1;
        // showTimer.innerText = sec;
    }
	if (sec < 1) {
        clearTimeout(timer);
    }

}
```
[this is my url to github repository for project 1](https://github.com/ylcarolcui/carolcui-project1.git)