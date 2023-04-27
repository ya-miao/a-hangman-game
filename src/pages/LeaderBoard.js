import { useEffect, useState } from 'react';

import { Box, Divider, Grid, Stack, Typography, Paper } from '@mui/material';

import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const Leaderboard = ({setScreen}) => {

  const [playersList, setPlayersList] = useState([]);
  const [leaderboardList, setLeaderboardList] = useState([]);

  // TO DO:
  // We need to sort the playersList and set it to leaderboardList
  // Highest score to lowest, and maybe display only the top 10 (or some arbitrary number)

  const fetchPlayers = async () => {
    const allPlayers = await API.graphql({ query: queries.listPlayers });
    const sortedPlayers = allPlayers?.data?.listPlayers?.items.sort((a, b) => b.score - a.score);
    setPlayersList(sortedPlayers);
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Stack spacing={2} sx={{ FontFamily: 'Raleway' }}>
        <Stack container direction='row' justifyContent="space-between">
          <button onClick={e => setScreen('intro')}>Main Menu</button>
          <button onClick={e => setScreen('single')}>Play Again</button>
        </Stack>
        <Typography variant='h2' sx={{fontFamily: 'Roboto Condensed'}}>
          Leaderboard
        </Typography>
        <Stack container direction='row' justifyContent="space-between">
          <Grid>Rank</Grid>
          <Grid>Name</Grid>
          <Grid>Score</Grid>
        </Stack>
        <Divider />
        <Stack container direction='column' overflow={"scroll"} height={"300px"}>
        {playersList?.slice(0, 10).map((player, index) => (
          <Paper key={index} sx={{ my: 2, p: 2 }}>
            <Stack container alignItems="center" direction='row' justifyContent="space-between">
              <Grid>
                {index + 1}
              </Grid>
              <Grid>
                {player?.player}
              </Grid>
              <Grid>
                {player?.score}
              </Grid>
            </Stack>
          </Paper>
        ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Leaderboard;