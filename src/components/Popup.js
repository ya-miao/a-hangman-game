import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, tries, checkLeaderboard, playerId}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  const updateScore = async () => {
    const updatedPlayer = await API.graphql({ 
      query: mutations.updatePlayer, 
      variables: { input: {
        id: playerId,
        score: correctLetters.length * 10 - wrongLetters.length * 5
      } }
    });
    console.log('updatedPlayer: ');
    console.log(updatedPlayer);
  };

  const deletePlayer = async () => {
    const deletedPlayer = await API.graphql({ 
      query: mutations.deletePlayer, 
      variables: { input: {
        id: playerId
      } }
    });
    console.log('deletedPlayer: ');
    console.log(deletedPlayer);
  };

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    updateScore();
    finalMessage = 'Congratulations! You won!';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    deletePlayer();
    finalMessage = 'Unfortunately, you lost.';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
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
        <button onClick={playAgain}>Play Again</button>
        <button onClick={checkLeaderboard}>Check Leaderboad</button>
      </div>
    </div>
  )
}

export default Popup
