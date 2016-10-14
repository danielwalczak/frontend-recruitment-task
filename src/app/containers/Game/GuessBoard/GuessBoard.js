import React from 'react';
import { observer } from 'mobx-react';

import { MAX_WORD_LENGTH } from '../constants';
import './guessBoard.scss';

const GuessBoard = observer(({ word, discoveredIndexes }) => (
  <div className="guess-board">
    {
      [...Array(MAX_WORD_LENGTH).keys()]
        .map((fieldIndex) =>
          fieldIndex < word.length
            ? (
                <div key={fieldIndex} className="guess-board__field guess-board__field--active">
                  {discoveredIndexes.indexOf(fieldIndex) !== -1
                    ? <span className="guess-board__letter">{word[fieldIndex]}</span>
                    : ''}
                </div>
              )
          : <div key={fieldIndex} className="guess-board__field"></div>
        )
    }
  </div>
));

export default GuessBoard;
