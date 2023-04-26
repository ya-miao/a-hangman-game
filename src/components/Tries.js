import React from 'react'

const Tries = ({wrongLetters}) => {
    let tries = 6 - wrongLetters.length
  return (
    <div className="tries-container">
      <h2>Tries: {tries}</h2>
    </div>
  )
}

export default Tries
