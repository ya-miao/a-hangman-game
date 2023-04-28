import { Container, Stack } from "@mui/material";

import GameVisual from "../components/GameVisual";

// TASK - add prop here to determine if hosted or not
const Hangman = ({ setScreen, playerId }) => {

  const words = ['application', 'programming', 'interface', 'wizard',
    'position', 'mislead', 'performance', 'shrink', 'evolution', 'strength', 'lighthall',
    'spotify', 'youtube', 'netflix', 'shrek', 'spiderman', 'superman', 'batman',
    'itunes', 'iphone', 'android', 'galaxy', 'mario', 'nike', 'adidas', 'restaurant',
    'bakery', 'manhattan', 'brooklyn', 'shazam', 'spiderman', 'superman', 'batman', 'amazon',
    'drake', 'kendrick', 'matilda', 'memes', 'cheetos', 'dorritos', 'fanta', 'pepsi',
    'playstation', 'xbox', 'samsung', 'ikea', 'walmart', 'target', 'tesla', 'ebay',
    'tacos', 'dumplings', 'margarita', 'californa', 'paris', 'country', 'brazil', 'soccer',
    'chelsea', 'argentina', 'ocean', 'mountain', 'alligator', 'parrot'
  ];

  // TASK - We should be able to set a selected word and create a link to share for that game
  let selectedWord = words[Math.floor(Math.random() * words.length)];

  return (
    <Container sx={{ m: 4 }}>
      <Stack direction='column'>
        <GameVisual setScreen={setScreen} playerId={playerId} words={words} selectedWord={selectedWord}/>
      </Stack>
    </Container>
  );
}

export default Hangman;