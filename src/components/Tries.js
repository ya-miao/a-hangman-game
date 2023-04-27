import React from 'react'

const Tries = ({tries}) => {
  return (
    <div className="tries-container">
      <h2>Lives: <span>{tries} ❤️</span></h2>
    </div>
  )
}

export default Tries
