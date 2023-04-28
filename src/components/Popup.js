import React, { useEffect, useState } from 'react';
import { checkWin } from '../helpers/helpers';
import { Alert, Snackbar, Stack } from '@mui/material';
import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';

import { useLocation, useNavigate } from "react-router-dom";

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain, tries, checkLeaderboard, playerId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  let alreadyWon = false;

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
    alreadyWon = true;
    finalMessage = 'Congratulations! You won!';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Sorry, you lost :(';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
          You've already won this hosted game!
        </Alert>
      </Snackbar>
      <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
        <div className="popup">
          <Stack direction="column" gap={1}>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
          </Stack>
          <Stack direction="row" gap={1}>
            <button onClick={() => {
              if (alreadyWon && location.pathname !== '/hangman') {
                setOpenAlert(true);
              } else {
                playAgain();
              }
            }}>Play Again</button>
            <button onClick={e => {
              navigate('/');
            }}>Main Menu</button>
            <button onClick={checkLeaderboard}>Check Leaderboard</button>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default Popup;
