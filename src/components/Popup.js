import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';
import { Stack } from '@mui/material';
import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';

import { useNavigate } from "react-router-dom";

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, tries, checkLeaderboard, playerId }) => {
  const navigate = useNavigate();

  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  const updateScore = async () => {
    const updatedPlayer = await API.graphql({
      query: mutations.updatePlayer,
      variables: {
        input: {
          id: playerId,
          score: correctLetters.length * 10 - wrongLetters.length * 5
        }
      }
    });
  };

  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    updateScore();
    finalMessage = 'Congratulations! You won!';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Sorry, you lost :(';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
      <div className="popup">
        <Stack direction="column" gap={1}>
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
        </Stack>
        <Stack direction="row" gap={1}>
          <button onClick={playAgain}>Play Again</button>
          <button onClick={e => {
            navigate('/');
          }}>Main Menu</button>
          <button onClick={checkLeaderboard}>Check Leaderboad</button>
        </Stack>
      </div>
    </div>
  )
}

export default Popup;
