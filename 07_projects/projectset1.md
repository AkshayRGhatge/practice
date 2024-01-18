# Projects related to DOM

## Project lin
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

```javascript

console.log("AKshay")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; //grey
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; //yellow
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; //blue
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; //white
    }
  });
});

```

#project solution2

```javascript
const form = document.querySelector('form');
//This use case will give empty
//const height=parseInt(document.querySelector("#height").value)
form.addEventListener('submit', function (e) {
  e.preventDefault(); // in form when we click on the button it send the reqest to server by the get or post method so we need to stop that behavior

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```



## project 3 solution colde

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```


## project 4 solution colde

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## project 5

```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
  </div>
  `;
});


```


## project 6 solution

```javascript
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const bgColor = function bgColorUpdate() {
  let rnd = `rgb(${random(255)},${random(
    255
  )},${random(255)})`;
  console.log(rnd);
  return rnd;
};
let intervalID;
const changeBgColor= function(){
	if(!intervalID){
	intervalID=setInterval(changeBG,1000);
	}
	function changeBG(){
	
		document.body.style.backgroundColor=bgColor();  
	}
}

// click event to start the bg color changes
const backgroundStart = startButton.addEventListener('click', changeBgColor);

// click event to stop the bg color changes
const backgroundStart1 = stopButton.addEventListener('click', function () {
console.log("stop");
clearInterval(intervalID);
intervalID=null;   //setting the intervalID to null after the work done
 
});
```

