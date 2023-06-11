import { Typography } from '@mui/material';
import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            <Typography variant='h4'>
              {correctLetters.includes(letter) ? letter : ''}
            </Typography>
          </span>
        )
      })}
    </div>
  )
}

export default Word
