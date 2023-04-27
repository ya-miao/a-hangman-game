import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import * as mutations from './graphql/mutations';

import Hangman from './pages/Hangman';
import IntroScreen from './pages/IntroScreen';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import Leaderboard from './pages/LeaderBoard';
Amplify.configure(awsconfig);

const App = () => {

  const [screen, setScreen] = useState('intro');

  const [openDialog, setOpenDialog] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerId, setPlayerId] = useState('');

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (event) => {
    setPlayerName(event.target.value)
  };

  useEffect(() => {
    console.log('playerId:');
    console.log(playerId);
  }, [playerId]);

  return (
    <>
      {screen === 'hosted' ?
        <>Hosted game</> : screen === 'single' ?
          <Hangman setScreen={setScreen} playerId={playerId} /> : screen === 'leaderboard' ?
            <Leaderboard /> :
              <IntroScreen setScreen={setScreen} handleClickOpenDialog={handleClickOpenDialog}/>
      }
      <Dialog open={openDialog} onClose={handleCloseDialog}>
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
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={async () => {
            const newPlayer = await API.graphql({ 
              query: mutations.createPlayer, 
              variables: { input: { player: playerName } }
            });

            setPlayerId(newPlayer?.data?.createPlayer?.id);
            setOpenDialog(false);
            setScreen('single');
          }}>Play</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
