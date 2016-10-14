import React from 'react';
import { observer } from 'mobx-react';

import Hangman from './Hangman/Hangman';
import MissedBoard from './MissedBoard/MissedBoard';
import GuessBoard from './GuessBoard/GuessBoard';
import GameEnd from './GameEnd/GameEnd';

import './index.scss';

@observer
export default class Game extends React.Component {

  componentDidMount() {
    this.props.store.fetchWord();

    document.addEventListener('keydown', this.onKeyPress.bind(this));
  }

  onKeyPress(event) {
    if ((event.keyCode > 64 && event.keyCode < 91)
      || (event.keyCode > 96 && event.keyCode < 123)
      || event.keyCode === 189) {
      this.props.store.addLetter(event.key);
    }
  }

  render() {
    const { store } = this.props;
    return (
      <div className="viewport">
        <div className="game">
          <div className="game__top">
            <div className="game__hangman-wrapper">
              <Hangman lifes={store.lifes}/>
            </div>
            <div className="game__missed-board-wrapper">
              <MissedBoard letters={store.missedLetters}/>
            </div>
          </div>
          <GuessBoard word={store.wordToGuess} discoveredIndexes={store.discoveredIndexes}/>
          {store.finished
            ? <GameEnd lifes={store.lifes} resetGame={store.reset.bind(store)}></GameEnd> : ''}
        </div>
      </div>
    );
  }
}
