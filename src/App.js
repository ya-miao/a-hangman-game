import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import Hangman from './pages/Hangman's;
import IntroScreen from './pages/IntroScreen';
import SingleDialog from './components/SingleDialog';
import HostedDialog from './components/HostedDialog';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import Leaderboard from './pages/LeaderBoard';
Amplify.configure(awsconfig);

const App = () => {

  const [screen, setScreen] = useState('intro');

  const [openSingle, setOpenSingle] = useState(false);
  const [openHosted, setOpenHosted] = useState(false);
  
  const [playerName, setPlayerName] = useState('');
  const [playerId, setPlayerId] = useState('');


  const handleOpenSingle = () => {
    setOpenSingle(true);
  };

  const handleCloseSingle = () => {
    setOpenSingle(false);
  };

  const handleOpenHosted = () => {
    setOpenHosted(true);
  };

  const handleCloseHosted = () => {
    setOpenHosted(false);
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
            <Leaderboard setScreen={setScreen}/> : screen === 'intro' ?
              <IntroScreen setScreen={setScreen} handleOpenSingle={handleOpenSingle} handleOpenHosted={handleOpenHosted} />
              : <></>
      }
      <SingleDialog setScreen={setScreen} setOpenSingle={setOpenSingle} openSingle={openSingle} handleCloseSingle={handleCloseSingle} playerName={playerName} setPlayerName={setPlayerName} setPlayerId={setPlayerId} />
      <HostedDialog setScreen={setScreen} setOpenHosted={setOpenHosted} openHosted={openHosted} handleCloseHosted={handleCloseHosted} />
      {/* <Dialog open={openSingle} onClose={handleCloseSingle}>
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
      </Dialog> */}
    </>
  );
}

export default App;
