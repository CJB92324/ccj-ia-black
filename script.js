const words = ['red', 'blue', 'purple', 'green', 'brown', 'red', 'green', 'purple', 'blue', 'brown', 'end', '']
const colors = ['Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', '']
const ccjWord = document.getElementById('ccj-word');
const infoScreen = document.getElementById('info-screen');
const infoScreen2 = document.getElementById('info-screen-2');

let info = false;
let stroop = false;
function stroopTest() {
	stroop = true;
	infoScreen.style.display = 'none';
	infoScreen2.style.display = 'none';
	ccjWord.textContent = words[0];
	ccjWord.style.color = colors[0].toLowerCase();
	ccjWord.style.display = 'block';
	let count = 1;
	const maxIts = 12;
	const intTime = 2000;
	const intId = setInterval(() => {
		ccjWord.textContent = words[count];
		ccjWord.style.color = colors[count].toLowerCase();
		ccjWord.style.display = 'block';
		
		count++;
		
		
		if (count >= maxIts) {
			clearInterval(intId);
			infoScreen.style.display = 'block';
			infoScreen2.style.display = 'none';
			ccjWord.style.display = 'none';
			info = false;
			stroop = false;
		}
	}, intTime);
}

document.addEventListener('keydown', (event) => {
	if (stroop != true) {
	if (event.code === 'Space') {
		event.preventDefault();
		
		if (info === false) {
			infoScreen.style.display = 'none';
			infoScreen2.style.display = 'block';
			console.log("flag found");
			info = true;
		} else {
		console.log("stroop started");
		stroopTest();
		}
	}
	}
});