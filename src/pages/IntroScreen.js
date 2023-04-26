import { Button, Box, Stack, Typography } from "@mui/material";

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';

const IntroScreen = ({ setScreen }) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [playerName, setPlayerName] = useState('');

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (event) => {
    setPlayerName(event.target.value)
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack spacing={3} sx={{ alignItems: 'center' }}>
        <Stack alignItems="center">
          <Typography variant="h1" sx={{ fontFamily: 'Montserrat' }}>Hangman</Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Sacramento' }}>online</Typography>
        </Stack>
        <Stack direction='column' spacing={2}>
          <Button onClick={() => {
            handleClickOpenDialog(true);
          }} sx={{ fontSize: '18px', borderRadius: '8px', width: '300px', height: '50px', border: '1px solid #000000', color: '#000000' }}>Single Player</Button>
          <Button onClick={() => {
            setScreen('hosted');
          }} sx={{ fontSize: '18px', borderRadius: '8px', width: '300px', height: '50px', border: '1px solid #000000', color: '#000000' }}>Host Game</Button>
        </Stack>
      </Stack>
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
            setOpenDialog(false);
            setScreen('single');
          }}>Play</Button>
        </DialogActions>
      </Dialog>
    </Box>

  );
}
export default IntroScreen;