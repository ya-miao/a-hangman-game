import { Button, Box, Stack, Typography } from "@mui/material";

import React from 'react';

const IntroScreen = ({ setScreen, handleClickOpenDialog }) => {

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
      
    </Box>

  );
}
export default IntroScreen;