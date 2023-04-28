import React, { useState, useEffect } from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Popup from './Popup';
import Notification from './Notification';
import { showNotification as show, checkWin } from '../helpers/helpers';
import Tries from "./Tries";

import { useNavigate } from "react-router-dom";

const GameVisual = ({ playerId, words, selectedWord, setSelectedWord}) => {

  const navigate = useNavigate();

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);

  }, [correctLetters, wrongLetters, playable]);

  const buttons = "abcdefghjklmnopqrstuvwxyz".split("")

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);
    
    setSelectedWord(words[Math.floor(Math.random() * words.length)]);
  }

  let tries = 6 - wrongLetters.length
  function checkLeaderboard() {
    navigate("/leaderboard");
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Tries tries={tries}/>
      </div>
      <WrongLetters wrongLetters={wrongLetters} />
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} checkLeaderboard={checkLeaderboard} playerId={playerId} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default GameVisual;