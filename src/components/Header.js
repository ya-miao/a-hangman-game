import React from 'react'
import { Stack, Typography } from '@mui/material'

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Stack width="900px">
      <button className="back-track-btn" onClick={e => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="15" height="15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffe478" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
        </svg>
      </button>
      <Typography variant="h4" sx={{ fontFamily: 'Montserrat', textAlign: "center", color: "#ffe478" }}>Hangman</Typography>
    </Stack>
  )
}

export default Header
