import { useEffect, useState } from 'react';

import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const Leaderboard = () => {

  const [playersList, setPlayersList] = useState([]);
  const [leaderboardList, setLeaderboardList] = useState([]);

  // TO DO:
  // We need to sort the playersList and set it to leaderboardList
  // Highest score to lowest, and maybe display only the top 10 (or some arbitrary number)

  const fetchPlayers = async () => {
    const allPlayers = await API.graphql({ query: queries.listPlayers });
    setPlayersList(allPlayers?.data?.listPlayers?.items);
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack spacing={2}>
        <Typography variant='h2'>
          Leaderboard
        </Typography>
        <Divider />
        {playersList?.map((player, index) => (
          <Grid container key={index}>
            <Grid item xs={6}>
              <Typography>{player?.player}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{player?.score}</Typography>
            </Grid>
          </Grid>
        ))
        }
      </Stack>

    </Box>
  );
};

export default Leaderboard;