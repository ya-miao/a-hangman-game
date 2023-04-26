import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Hangman from './pages/Hangman';
import IntroScreen from './pages/IntroScreen';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

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
