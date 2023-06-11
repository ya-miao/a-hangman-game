import { Button, Box, Stack, Typography } from "@mui/material";

import React from 'react';

const IntroScreen = ({ hosted, handleOpenSingle, handleOpenHosted }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack spacing={3} sx={{ alignItems: 'center' }}>
        <Stack alignItems="center">
          <Typography variant="h1" sx={{ fontFamily: 'Syne Mono', color: "#ffe478" }}>Hangman</Typography>
          <Typography variant="h5" sx={{ color: "white" }}>online</Typography>
        </Stack>
        { hosted ? 
          <Stack direction='column' spacing={2} marginTop={3} alignItems='center'>
            <Typography variant="overline" sx={{ color: "white" }}>You've received a shared link!</Typography>
            <button onClick={() => {handleOpenSingle(true);}} className="btns-styles slide_right">Play Hosted Game</button>
          </Stack>
          :
          <Stack direction='column' spacing={2} marginTop={3} alignItems='center'>
              <button onClick={() => {handleOpenSingle(true);}} className="btns-styles slide_right">Single Player</button>
              <button onClick={() => {handleOpenHosted(true);}} className="btns-styles slide_right">Host Game</button>
            </Stack>
        }

      </Stack>
    </Box>
  );
}
export default IntroScreen;