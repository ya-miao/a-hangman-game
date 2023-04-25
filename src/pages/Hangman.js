import { Container, Stack } from "@mui/material";

import GameInput from "../components/GameInput";
import GameVisual from "../components/GameVisual";

// The Hangman components go in here!
const Hangman = () => {

  // Will place all backend functions in here for the hangman game
  // Let's pass all necessary info into the components - GameInput, GameVisual

  return (
    <Container sx={{ m: 4 }}>
      <Stack direction='column' spacing={2}>
        <GameInput />
        <GameVisual />
      </Stack>
    </Container>
  );
}

export default Hangman;