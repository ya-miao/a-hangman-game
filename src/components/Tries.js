import React from 'react'

import { Stack, Typography } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';

const Tries = ({tries}) => {
  return (
    <div className="tries-container">
      <Stack direction='row' spacing={1.5}>
        <Typography>Lives: {tries}</Typography>
        <FavoriteIcon fontSize='small' />
      </Stack>
    </div>
  )
}

export default Tries
