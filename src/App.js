import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Hangman from './pages/Hangman';
import IntroScreen from './pages/IntroScreen';

const App = () => {

  const [screen, setScreen] = useState('intro');

  return (
    <>
      {screen === 'hosted' ?
        <>Hosted game</> : screen === 'single' ?
          <Hangman /> :
            <IntroScreen setScreen={setScreen} />
      }
    </>
  );
}

export default App;
