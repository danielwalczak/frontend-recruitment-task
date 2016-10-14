import React from 'react';

import './gameEnd.scss';

const GameEnd = ({ lifes, resetGame }) => (
  <div className="game-end">
    <div className="game-end__content">
      <h2 className="game-end__title">
        {lifes > 0 ? 'Congratulations!' : 'Game over'}
      </h2>
      <button
        className="btn btn--yellow"
        onClick={resetGame}>New word</button>
    </div>
  </div>
);

export default GameEnd;
