let wordID, wordLength;

const letterIndicatorsContainer = document.querySelector('#letter-indicators');
const letterButtonsContainer = document.querySelector('#letter-buttons');
let letterIndicators = [];
const hangman = document.querySelector('#hangman');
let hangmanStatus = 1;

function createIndicators() {
  for (let i = 1; i <= wordLength; i++) {
    const indicator = document.createElement('span');

    indicator.textContent = '_';

    letterIndicators.push(indicator);
    letterIndicatorsContainer.appendChild(indicator);
  }
}

function createButtons() {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  alphabet.forEach(letter => {
    const button = document.createElement('button');

    button.classList.add('letter-button');
    button.value = letter;
    button.textContent = letter.toUpperCase();

    button.addEventListener('click', handleLetterClick, {once: true});

    letterButtonsContainer.appendChild(button);
  });
}

function handleLetterClick() {
  const button = event.target;

  button.classList.add('selected-letter');
  guessLetter(button.value);
}

function guessLetter(letter) {
  console.log(wordID)
  fetch(`/hangman/guess/${wordID}/${letter}`)
  .then(response => response.json())
  .then((data) => {
    const { guessResponse } = data;

    if (!guessResponse.some(response => response)) {
      hangmanStatus++;
      hangman.src = `images/hangman${hangmanStatus}.png`;
    } else placeLetters(guessResponse, letter);
  })
}

function placeLetters(guessResponse, letter) {
  guessResponse.forEach((response, index) => {
    if (response) letterIndicators[index].textContent = letter;
  });
}

fetch('/hangman/word')
.then(response => response.json())
.then((data) => {
  const { id, letterCount } = data.wordData;
  wordID = id;
  wordLength = letterCount;
})
.then(createIndicators)
.then(createButtons);
