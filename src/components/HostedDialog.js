import { Button, Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Snackbar, Alert } from '@mui/material';

import * as mutations from '../graphql/mutations';
import { API } from 'aws-amplify';

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

const HostedDialog = ({ setOpenHosted, openHosted, handleCloseHosted, hostedWord, setHostedWord, hostedId, setHostedId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [hostedLink, setHostedLink] = useState('');

  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const handleInputChange = (event) => {
    setHostedWord(event.target.value)
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
          Enter a hosted word please.
        </Alert>
      </Snackbar>
      <Dialog open={openHosted} onClose={handleCloseHosted} fullWidth>
        <DialogContent>
          <Stack spacing={2}>
            <DialogContentText>
              Enter the word to guess for your hosted game.
            </DialogContentText>
            <TextField
              defaultValue={hostedWord}
              autoFocus
              margin="dense"
              id="hostedWord"
              label="Hosted Word"
              fullWidth
              variant="standard"
              onChange={handleInputChange}
            />
            <Stack direction='row' spacing={2}>
              <Button onClick={async () => {
                if (hostedWord === '') {
                  setOpenAlert(true);
                } else {
                  const newHostedGame = await API.graphql({
                    query: mutations.createHostedGame,
                    variables: { input: { word: String(hostedWord).toLowerCase() } }
                  });
                  setHostedWord(newHostedGame?.data?.createHostedGame?.word);
                  setHostedId(newHostedGame?.data?.createHostedGame?.id);
                  setHostedLink(`${window.location.origin}/hosted/${newHostedGame?.data?.createHostedGame?.id}`);
                }
              }}>Generate</Button>
              <TextField label='Link to Hosted Game' size='small' fullWidth value={hostedLink} />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseHosted}>Close</Button>

        </DialogActions>
      </Dialog>
    </>
  );
};

export default HostedDialog;