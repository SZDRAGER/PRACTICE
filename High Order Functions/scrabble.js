const _ = require('lodash');
// import _ from 'lodash';

const createStringData = (str) => {
    const storage = {};
    const arrayOfSybols = Array.from(str)
    for (const symbol of arrayOfSybols) {
        // Проверка на существование
        if (_.has(storage, symbol)) {
            storage[symbol] += 1;
        } else {
            storage[symbol] = 1;
        }
    }
    return storage;
};

const scrabble = (givenSymbols, requestedWord) => {
  const givenSymbolsData = createStringData(givenSymbols); // givenSymbols info as an object
  const requestedWordData = createStringData(requestedWord.toLowerCase()); // requestedWord info as an object
  const requestedWordEntries = Object.entries(requestedWordData); // requestedWordData entries
  for (const [character] of requestedWordEntries) { // check each character of requestedWordEntries
    if (!_.has(givenSymbolsData, character)) { // if there is no such character return false;
      return false;
    }
    if (requestedWordData[character] > givenSymbolsData[character]) { 
      // if there is fewer characters than needed return false;
      return false;
    }
  }
  return true;
};

const givenSymbols = 'wowordd';
const requestedWord = 'word';
console.log(scrabble(givenSymbols, requestedWord));