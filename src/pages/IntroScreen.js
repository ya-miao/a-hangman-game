import { Button, Box, Stack, Typography } from "@mui/material";

import React from 'react';

const IntroScreen = ({ setScreen, handleClickOpenDialog }) => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack spacing={3} sx={{ alignItems: 'center' }}>
        <Stack alignItems="center">
          <Typography variant="h1" sx={{ fontFamily: 'Montserrat', color: "#ffe478" }}>Hangman</Typography>
          <Typography variant="h5" sx={{ fontFamily: 'Sacramento', color: "white" }}>online</Typography>
        </Stack>
        <Stack direction='column' spacing={2}>
          <button onClick={() => {
            handleClickOpenDialog(true);
          }} className="btns-styles slide_right">Single Player</button>
          <button onClick={() => {
            setScreen('hosted');
          }} className="btns-styles slide_right">Host Game</button>
        </Stack>
      </Stack>
      
    </Box>

  );
}
export default IntroScreen;