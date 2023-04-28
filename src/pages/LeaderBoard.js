import { useEffect, useState } from 'react';

import { Box, Divider, Grid, Stack, Typography, Paper } from '@mui/material';

import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

import { useNavigate } from "react-router-dom";

const Leaderboard = ({ playerId }) => {

  const navigate = useNavigate();

  const [playersList, setPlayersList] = useState([]);
  const [leaderboardList, setLeaderboardList] = useState([]);

  const fetchPlayers = async () => {
    const allPlayers = await API.graphql({ query: queries.listPlayers });
    const sortedPlayers = allPlayers?.data?.listPlayers?.items.sort((a, b) => b.score - a.score);
    setPlayersList(sortedPlayers);
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack sx={{ FontFamily: 'Raleway', width: "1000px" }}>
        <Stack container direction='row' justifyContent="space-between">
          <button className="btns-styles slide_right" onClick={e => {
            navigate('/');
            }}>Menu</button>
          <button className="btns-styles slide_right" onClick={e => {
            navigate('/hangman');
            }}>Play</button>
        </Stack>
        <Stack container direction='row' justifyContent="center" alignItems="center" gap={2}>
          <Typography variant='h2' sx={{ fontFamily: "Lucida Console, Monaco, monospace", textAlign: "center", color: "#ffe478" }}>
            Leaderboard
          </Typography>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-gamepad" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffe478" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 12h4m-2 -2v4" />
            <line x1="15" y1="11" x2="15" y2="11.01" />
            <line x1="18" y1="13" x2="18" y2="13.01" />
          </svg>
        </Stack>

        <Stack container direction='column' overflow={"scroll"} height={"350px"} marginTop={2}>
          <Stack container direction='row' p={2} justifyContent="space-between" className='leaderboard-header' sx={{ bgcolor: "#203c56" }}>
            <div>Rank</div>
            <div>Name</div>
            <div>Score</div>
          </Stack>
          {playersList?.slice(0, 10).map((player, index) => (
            <Paper variant={player?.id === playerId ? 'outlined' : 'elevation'} key={index} sx={{ bgcolor: player?.id === playerId ? '#ffe478' : 'white', p: 2, borderRadius: 0, color: "black", fontWeight: "bold" }}>
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