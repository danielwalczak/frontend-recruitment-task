import React from 'react';
import { observer } from 'mobx-react';

import './missedBoard.scss';

const MissedBoard = observer(({ letters }) =>
  <div className="missed-board">
    <h5 className="missed-board__title">you missed:</h5>
    {letters.map((letter) =>
      <span key={letter} className="missed-board__letter">{letter}</span>
    )}
  </div>
);

export default MissedBoard;
