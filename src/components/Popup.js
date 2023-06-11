import React, { useEffect, useState } from 'react';
import { checkWin } from '../helpers/helpers';
import { Alert, Snackbar, Stack, Typography } from '@mui/material';
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
    finalMessage = 'GAME OVER';
    finalMessageRevealWord = `The word was... ${selectedWord}`;
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
          <Typography>
            You've already won this hosted game!
          </Typography>
        </Alert>
      </Snackbar>
      <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
        <div className="popup">
          <Stack direction="column" gap={1}>
            <Typography variant='h5'>
              {finalMessage}
            </Typography>
            <Typography>
              {finalMessageRevealWord}
            </Typography>
          </Stack>
          <Stack direction="row" gap={1}>
            <button onClick={() => {
              if (alreadyWon && location.pathname !== '/hangman') {
                setOpenAlert(true);
              } else {
                playAgain();
              }
            }}>
              <Typography>
                Play Again
              </Typography>
            </button>
            <button onClick={e => {
              navigate('/');
            }}>
              <Typography>
                Main Menu
              </Typography>
            </button>
            <button onClick={checkLeaderboard}>
              <Typography>
                Check Leaderboard
              </Typography>
            </button>
          </Stack>
        </div>
      </div>
    </>
  )
}

export default Popup;
