import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import * as mutations from '../graphql/mutations';
import { API } from 'aws-amplify';

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

const SingleDialog = ({ setOpenSingle, openSingle, handleCloseSingle, playerName, setPlayerName, setPlayerId }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const getHostedId = location.pathname.replace('/hosted/', '')

  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const handleInputChange = (event) => {
    setPlayerName(event.target.value)
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
          Enter a player name please.
        </Alert>
      </Snackbar>
      <Dialog open={openSingle} onClose={handleCloseSingle}>
        <DialogContent>
          <DialogContentText>
            Enter your player name.
          </DialogContentText>
          <TextField
            defaultValue={playerName}
            autoFocus
            margin="dense"
            id="playerName"
            label="Player Name"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSingle}>Cancel</Button>
          <Button onClick={async () => {
            if (playerName === '') {
              setOpenAlert(true);
            } else {
              const newPlayer = await API.graphql({
                query: mutations.createPlayer,
                variables: { input: { player: playerName } }
              });

              setPlayerId(newPlayer?.data?.createPlayer?.id);
              setOpenSingle(false);
              navigate(location.pathname.includes('hosted') ? `/hangman/${getHostedId}` : '/hangman');
            }
          }}>Play</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SingleDialog;