import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import * as mutations from '../graphql/mutations';
import { API } from 'aws-amplify';

const SingleDialog = ({setScreen, setOpenSingle, openSingle, handleCloseSingle, playerName, setPlayerName, setPlayerId}) => {

  const handleInputChange = (event) => {
    setPlayerName(event.target.value)
  };

  return (
    <Dialog open={openSingle} onClose={handleCloseSingle}>
      <DialogContent>
        <DialogContentText>
          Enter your player name.
        </DialogContentText>
        <TextField
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
          const newPlayer = await API.graphql({
            query: mutations.createPlayer,
            variables: { input: { player: playerName } }
          });

          setPlayerId(newPlayer?.data?.createPlayer?.id);
          setOpenSingle(false);
          setScreen('single');
        }}>Play</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SingleDialog;