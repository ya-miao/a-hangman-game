import { Stack } from '@mui/material'
import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  return (
    <div className="wrong-letters-container">
        {wrongLetters.length > 0 && 
          <h2>Wrong Letters:</h2>
        }
        <Stack direction={"row"} spacing={1}>
        {wrongLetters
          .map((letter, i) => 
          <h2 className='wrong-letters' key={i}>{letter}</h2>
        )}
        </Stack>
    </div>
  )
}

export default WrongLetters
