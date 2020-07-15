let wordID, wordLength;

const letterIndicatorsContainer = document.querySelector('#letter-indicators');
const letterButtonsContainer = document.querySelector('#letter-buttons');
let letterIndicators = [];
let letterButtons = [];
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

    letterButtons.push(button);
    letterButtonsContainer.appendChild(button);
  });
}

function handleLetterClick() {
  const button = event.target;

  button.classList.add('selected-letter');
  guessLetter(button.value);
}

function guessLetter(letter) {
  fetch(`/hangman/guess/${wordID}/${letter}`)
  .then(response => response.json())
  .then((data) => {
    const { guessResponse } = data;

    if (!guessResponse.some(response => response)) {
      hangmanStatus++;
      hangman.src = `images/hangman${hangmanStatus}.png`;

      if (hangmanStatus == 7) endGame();
    } else placeLetters(guessResponse, letter);
  })
}

function placeLetters(guessResponse, letter) {
  guessResponse.forEach((response, index) => {
    if (response) letterIndicators[index].textContent = letter;
  });
}

function endGame() {
  letterButtons.forEach(button => {
    button.removeEventListener('click', handleLetterClick);
  });
}

async function getWord() {
  const response = await fetch('/hangman/word')
  const data = await response.json();
  const { id, letterCount } = data.wordData;
  wordID = id;
  wordLength = letterCount;

  createIndicators()
  createButtons();
}

getWord();
