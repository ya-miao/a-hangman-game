import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import * as mutations from '../graphql/mutations';
import { API } from 'aws-amplify';

import { useNavigate } from "react-router-dom";

const HostedDialog = ({ setScreen, setOpenHosted, openHosted, handleCloseHosted }) => {
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    // setPlayerName(event.target.value)
  };

  return (
    <Dialog open={openHosted} onClose={handleCloseHosted}>
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseHosted}>Cancel</Button>
        <Button onClick={async () => {
          //   const newPlayer = await API.graphql({
          //     query: mutations.createPlayer,
          //     variables: { input: { player: playerName } }
          //   });

          setOpenHosted(false);
          navigate('/hosted');
        }}>Share</Button>
      </DialogActions>
    </Dialog>
  );
};

export default HostedDialog;