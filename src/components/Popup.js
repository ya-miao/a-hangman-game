import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, tries, checkLeaderboard}) => {
  let finalMessage = '';
  let score = ''
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Congratulations! You won!';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately, you lost.';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    score = 'Final Score: ' + tries;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <h3>{score}</h3>
        <button onClick={playAgain}>Play Again</button>
        <button onClick={checkLeaderboard}>Check Leaderboad</button>
      </div>
    </div>
  )
}

export default Popup
