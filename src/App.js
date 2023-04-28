import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hangman from './pages/Hangman';
import IntroScreen from './pages/IntroScreen';
import SingleDialog from './components/SingleDialog';
import HostedDialog from './components/HostedDialog';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import Leaderboard from './pages/LeaderBoard';
Amplify.configure(awsconfig);

const App = () => {

  const [openSingle, setOpenSingle] = useState(false);
  const [openHosted, setOpenHosted] = useState(false);

  const [playerName, setPlayerName] = useState('');
  const [playerId, setPlayerId] = useState('');

  const [ hostedWord, setHostedWord ] = useState('');
  const [ hostedId, setHostedId ] = useState('');

  const handleOpenSingle = () => {
    setOpenSingle(true);
  };

  const handleCloseSingle = () => {
    setOpenSingle(false);
  };

  const handleOpenHosted = () => {
    setOpenHosted(true);
  };

  const handleCloseHosted = () => {
    setOpenHosted(false);
  };

  useEffect(() => {
    console.log('playerId:');
    console.log(playerId);
  }, [playerId]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroScreen handleOpenSingle={handleOpenSingle} handleOpenHosted={handleOpenHosted} hosted={false} />} />
          <Route path="/hangman/*" element={<Hangman playerId={playerId} />} />
          <Route path="/leaderboard" element={<Leaderboard playerId={playerId} />} />
          <Route path="/hosted/*" element={<IntroScreen handleOpenSingle={handleOpenSingle} handleOpenHosted={handleOpenHosted} hosted={true} />} />
        </Routes>
        <SingleDialog setOpenSingle={setOpenSingle} openSingle={openSingle} handleCloseSingle={handleCloseSingle} playerName={playerName} setPlayerName={setPlayerName} setPlayerId={setPlayerId} />
        <HostedDialog setOpenHosted={setOpenHosted} openHosted={openHosted} handleCloseHosted={handleCloseHosted} hostedWord={hostedWord} setHostedWord={setHostedWord} hostedId={hostedId} setHostedId={setHostedId} />
      </BrowserRouter >
    </>
  );
}

export default App;
