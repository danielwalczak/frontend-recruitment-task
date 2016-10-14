import { observable, computed } from 'mobx';
import api from '../../api';
import { LIFES } from './constants';

export default class GameStore {

  @observable wordToGuess = '';
  @observable missedLetters = [];
  @observable guessedLetters = [];
  @observable discoveredIndexes = [];

  @computed get lifes() {
    return this.missedLetters.length >= LIFES ? 0 : LIFES - this.missedLetters.length;
  }

  @computed get finished() {
    return (this.discoveredIndexes.length === this.wordToGuess.length
      && this.wordToGuess.length !== 0)
      || this.missedLetters.length === LIFES;
  }

  addLetter(input) {
    const letter = input.toLowerCase();

    if (this.isMissed(letter)) {
      this.missedLetters.push(letter);
    } else if (this.isGuessed(letter)) {
      this.guessedLetters.push(letter);
      this.setdiscoveredIndexes(letter);
    }
  }

  fetchWord() {
    return api.fetchWord()
      .then((res) => this.setWord(res.word));
  }

  setWord(word) {
    console.log(word);
    this.wordToGuess = word.toLowerCase();
    return this.wordToGuess;
  }

  setdiscoveredIndexes(letter) {
    const word = this.wordToGuess;
    const indexes = this.findDiscoveredIndexes(word, letter);
    this.discoveredIndexes = this.discoveredIndexes.concat(indexes);
    return this.discoveredIndexes;
  }

  reset() {
    this.wordToGuess = '';
    this.missedLetters = [];
    this.guessedLetters = [];
    this.discoveredIndexes = [];
    this.fetchWord();
  }

  findDiscoveredIndexes(word, letter) {
    let index = word.indexOf(letter);
    const indexes = [];

    while (index !== -1) {
      indexes.push(index);
      index = word.indexOf(letter, index + 1);
    }
    return indexes;
  }

  isMissed(letter) {
    return this.wordToGuess.search(letter) === -1
      && this.missedLetters.indexOf(letter) === -1
      && this.lifes !== 0
      && this.finished === false;
  }

  isGuessed(letter) {
    return this.wordToGuess.search(letter) !== -1
      && this.guessedLetters.indexOf(letter) === -1
      && this.lifes !== 0
      && this.finished === false;
  }
}
