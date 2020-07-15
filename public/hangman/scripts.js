let jokeID, jokeLength;

const letterIndicators = document.querySelector('#letter-indicators');
const letterButtons = document.querySelector('#letter-buttons');

function createIndicators(jokeLength) {
  for (let i = 0; i < jokeLength; i++) {
    const indicator = document.createElement('span');

    indicator.textContent = '___';

    letterIndicators.appendChild(indicator);
  }
}

function createButtons() {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  alphabet.forEach(letter => {
    const button = document.createElement('button');

    button.classList.add('letter-button');
    button.value = letter;
    button.textContent = letter.toUpperCase();

    button.addEventListener('click', guessLetter);

    letterButtons.appendChild(button);
  });
}

function guessLetter() {

}

fetch(`/hangman/word`)
.then(response => response.json())
.then((data) => {
  const { id, letterCount } = data.randomWord;
  jokeID = id;
  return jokeLength = letterCount;
})
.then(createIndicators)
.then(createButtons);
