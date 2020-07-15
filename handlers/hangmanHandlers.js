const { words } = require('../data/words');
const { v4: uuidv4 } = require('uuid');
const request = require('request-promise');

function findWord(id) {
  return words.find(word => word.id == id);
}

function showWord(req, res) {
  const wordID = req.params.id;
  const word = findWord(wordID);

  res.status(200).json({ status: 200, word })
}

async function getWordData(req, res) {
  const response = await request({
    uri: 'https://random-word-api.herokuapp.com/word?swear=0',
    json: true
  });

  const randomWord = response[0];
  const id = uuidv4();
  const letterCount = randomWord.length;

  words[id] = randomWord;

  wordData = { id, letterCount };

  res.status(200).json({ status: 200, wordData });
}

function guessLetter(req, res) {
  const id = req.params.id;
  const guess = req.params.guess.toLowerCase();
  const word = words[id];

  guessResponse = [...word].map(letter => letter == guess);

  res.status(200).json({ status: 200, guessResponse });
}

module.exports = { showWord, getWordData, guessLetter }
