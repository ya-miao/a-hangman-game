import { Container, Stack } from "@mui/material";

import GameInput from "../components/GameInput";
import GameVisual from "../components/GameVisual";

const Hangman = ({setScreen, playerId}) => {
  
  return (
    <Container sx={{ m: 4 }}>
      <Stack direction='column' spacing={2}>
        <GameInput />
        <GameVisual setScreen={setScreen} playerId={playerId}/>
      </Stack>
    </Container>
  );
}

export default Hangman;