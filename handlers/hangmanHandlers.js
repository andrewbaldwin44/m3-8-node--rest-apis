const { words } = require('../data/words');
const dictionaryLength = words.length;

function findWord(id) {
  return words.find(word => word.id == id);
}

function showWord(req, res) {
  const wordID = req.params.id;
  const word = findWord(wordID);

  res.status(200).json({ status: 200, word })
}

async function getWordData(req, res) {
  const randomID = Math.floor(Math.random() * dictionaryLength);

  const randomWord = {...findWord(randomID)};

  delete randomWord.word;

  res.status(200).json({ status: 200, randomWord });
}

function guessLetter(req, res) {
  const id = req.params.id;
  const guess = req.params.guess.toLowerCase();
  const word = findWord(id).word;

  guessResponse = [...word].map(letter => letter == guess);

  res.status(200).json({ status: 200, guessResponse });
}

module.exports = { showWord, getWordData, guessLetter }
