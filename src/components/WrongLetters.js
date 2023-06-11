import { Stack, Typography } from '@mui/material'
import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
      {wrongLetters.length > 0 &&
        // <h2>Wrong Letters:</h2>
        <Typography variant='h4'>
          Wrong Letters:
        </Typography>
      }
      <Stack direction={"row"} spacing={1}>
        {wrongLetters
          .map((letter, i) =>
            <h2 className='wrong-letters' key={i}>
              <Typography variant='h5'>
                {letter}
              </Typography>
            </h2>
          )}
      </Stack>
    </div>
  )
}

export default WrongLetters
