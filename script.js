// const colors = ['Red', 'Green', 'Blue', 'Brown', 'Purple'];

const words = ['red', 'blue', 'purple', 'green', 'brown', 'red', 'green', 'purple', 'blue', 'brown', 'end']
//const colors = ['Green', 'Brown', 'Red', 'Blue', 'Purple', 'Blue', 'Brown', 'Green', 'Red', 'Purple', 'Black']
const colors = ['Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black']
const ccjWord = document.getElementById('ccj-word');
const infoScreen = document.getElementById('info-screen');
const readyScreen = document.getElementById('ready-screen');
//const (word, color);

let currentState = 'info';
//let nextState = 'stroop';
let currentWord = 0;
let currentPair = ['black', 'Black'];

/* function randomColorWord() {
	const word = colors[Math.floor(Math.random()*colors.length)];
	
	let color;
	do {
		color = colors[Math.floor(Math.random() * colors.length)];
	} while (color == word);
	
return {word, color};
}
*/
function nextWord(stage) {
	currentPair[0] = words[stage];
	currentPair[1] = colors[stage];
}

function setScreen(state) {
		infoScreen.style.display = 'none';
		readyScreen.style.display = 'none';
		ccjWord.style.display = 'none';
		
		if (state === 'info') {
			infoScreen.style.display = 'block';
		} else if (state === 'ready') {
			readyScreen.style.display = 'block';
		} 
		//else if (currentWord == words.length) {
		//	break;
		//} 
		else if (state === 'stroop') {
			nextWord(currentWord);
			ccjWord.textContent = currentPair[0];
			ccjWord.style.color = currentPair[1].toLowerCase();
			currentWord++;
			ccjWord.style.display = 'block';
		}
		
		currentState = state;
}

document.addEventListener('keydown', (event) => {
	if (event.code === 'Space') {
		event.preventDefault();
		
		if (currentState === 'info') {
			setScreen('stroop');
		} else if (currentState === 'stroop') {
			setScreen('ready');
		} else if (currentState === 'ready') {
			setScreen('stroop');
		}
	}
});