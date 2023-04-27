import { Container, Stack } from "@mui/material";

import GameInput from "../components/GameInput";
import GameVisual from "../components/GameVisual";

const Hangman = ({setScreen}) => {

  return (
    <Container sx={{ m: 4 }}>
      <Stack direction='column' spacing={2}>
        <GameInput />
        <GameVisual setScreen={setScreen}/>
      </Stack>
    </Container>
  );
}

export default Hangman;