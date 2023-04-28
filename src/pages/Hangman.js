import { useLocation, useNavigate } from 'react-router-dom';

import { Container } from "@mui/material";

import GameVisual from "../components/GameVisual";
import { useEffect, useState } from 'react';

import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const Hangman = ({ playerId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getHostedId = location.pathname.replace('/hangman/', '')

  const words = ['application', 'programming', 'interface', 'wizard',
    'position', 'mislead', 'performance', 'shrink', 'evolution', 'strength', 'lighthall',
    'spotify', 'youtube', 'netflix', 'shrek', 'spiderman', 'superman', 'batman',
    'itunes', 'iphone', 'android', 'galaxy', 'mario', 'nike', 'adidas', 'restaurant',
    'bakery', 'manhattan', 'brooklyn', 'shazam', 'spiderman', 'superman', 'batman', 'amazon',
    'drake', 'kendrick', 'matilda', 'memes', 'cheetos', 'dorritos', 'fanta', 'pepsi',
    'playstation', 'xbox', 'samsung', 'ikea', 'walmart', 'target', 'tesla', 'ebay',
    'tacos', 'dumplings', 'margarita', 'california', 'paris', 'country', 'brazil', 'soccer',
    'chelsea', 'argentina', 'ocean', 'mountain', 'alligator', 'parrot', 'kitty', 'ostentatious',
    'gregarious', 'outrageous', 'impulsive', 'hurtful', 'anger', 'enamored', 'beloved',
    'betrayed', 'resolution', 'beautiful', 'strife', 'fulfilled'
  ];
  
  const [selectedWord, setSelectedWord] = useState('');

  const getHostedGame = async () => {
    const oneGame = await API.graphql({
      query: queries.getHostedGame,
      variables: { id: getHostedId }
    });
    setSelectedWord(oneGame?.data?.getHostedGame?.word);
  };

  useEffect(() => {
    if(getHostedId !== '/hangman') {
      getHostedGame();
    } else {
      setSelectedWord(words[Math.floor(Math.random() * words.length)]);
    }
  }, [])

  useEffect(() => {
    if (playerId === '') {
      navigate('/');
    }
  }, [playerId]);

  return (
    <Container sx={{ m: 4 }}>
      <GameVisual playerId={playerId} words={words} selectedWord={selectedWord} setSelectedWord={setSelectedWord} />
    </Container>
  );
}

export default Hangman;