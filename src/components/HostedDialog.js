import { Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import * as mutations from '../graphql/mutations';
import { API } from 'aws-amplify';

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

const HostedDialog = ({ setOpenHosted, openHosted, handleCloseHosted, hostedWord, setHostedWord, hostedId, setHostedId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [ hostedLink, setHostedLink ] = useState('');

  const handleInputChange = (event) => {
    setHostedWord(event.target.value)
  };

  return (
    <Dialog open={openHosted} onClose={handleCloseHosted} fullWidth>
      <DialogContent>
        <Stack spacing={2}>
          <DialogContentText>
            Enter the word to guess for your hosted game.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="hostedWord"
            label="Hosted Word"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField label='Hosted Game Link' size='small' fullWidth value={hostedLink} />
        </Stack>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleCloseHosted}>Close</Button>
          <Button onClick={async () => {
              const newHostedGame = await API.graphql({
                query: mutations.createHostedGame,
                variables: { input: { word: String(hostedWord).toLowerCase() } }
              });
              setHostedWord(newHostedGame?.data?.createHostedGame?.word);
              setHostedId(newHostedGame?.data?.createHostedGame?.id);
              setHostedLink(`${window.location.origin}/hosted/${newHostedGame?.data?.createHostedGame?.id}`);
          }}>Generate</Button>
      </DialogActions>
    </Dialog>
  );
};

export default HostedDialog;