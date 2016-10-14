import React from 'react';
import { observer } from 'mobx-react';

import './hangman.scss';

const PARTS = ['foot-left', 'foot-right', 'leg-left', 'leg-right', 'hand-left',
                'hand-right', 'arm-left', 'arm-right', 'corpus', 'neck', 'head'];

const Hangman = observer(({ lifes }) => (
  <div className='hangman'>
    <div className='hangman__bar'></div>
    {
      PARTS
        .map((partName, index) =>
          index + 1 > lifes
            ? <div key={index + 1} className={`hangman__${partName}`}></div>
            : ''
    )}
  </div>
));

export default Hangman;
