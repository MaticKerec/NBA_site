import {Card, CardContent, Typography, Grid, Box} from '@mui/material';
import { TOR, MIL, BOS, MIA, PHI, IND, BKN, ORL, CHA, CHI, DET, WAS, CLE, NYK, ATL, DEN, MEM, SAC, PHX, LAC, GSW, DAL, MIN, OKC, UTA, LAL, NOP, POR, SAS, HOU } from 'react-nba-logos';
import styles from "../JS/standings.js";
import React from "react";
const EasternStandings = ({ standingsData }) => {
    const easternStandingsData = [
        {
            teamId: 1,
            teamName: 'Milwaukee Bucks',
            wins: 55,
            losses: 22,
            winPct: 0.714,
            gamesBehind: 0,
            streak: 'L1',
            logo: <MIL size={130}/>,
            primaryColor: '#00471b'

        },
        {
            teamId: 2,
            teamName: 'Boston Celtics',
            wins: 53,
            losses: 24,
            winPct: 0.688,
            gamesBehind: 2,
            streak: 'W1',
            logo: <BOS size={130}/>,
            primaryColor: '#008348;'
        },
        {
            teamId: 3,
            teamName: 'Philadelphia 76ers',
            wins: 50,
            losses: 26,
            winPct: 0.658,
            gamesBehind: 4.5,
            streak: 'W1',
            logo: <PHI size={130}/>,
            primaryColor: '#002b5c'

        },
        {
            teamId: 4,
            teamName: 'Cleveland Cavaliers',
            wins: 48,
            losses: 29,
            winPct: 0.623,
            gamesBehind: 7,
            streak: 'L2',
            logo: <CLE size={130}/>,
            primaryColor: '#6f263d'

        },
        {
            teamId: 5,
            teamName: 'New York Knicks',
            wins: 44,
            losses: 33,
            winPct: 0.571,
            gamesBehind: 11,
            streak: 'W2',
            logo: <NYK size={130}/>,
            primaryColor: '#006bb6'

        },
        {
            teamId: 6,
            teamName: 'Brooklyn Nets',
            wins: 41,
            losses: 35,
            winPct: 0.539,
            gamesBehind: 13.5,
            streak: 'W1',
            logo: <BKN size={130}/>,
            primaryColor: '#000000'

        },
        {
            teamId: 7,
            teamName: 'Miami Heat',
            wins: 40,
            losses: 37,
            winPct: 0.519,
            gamesBehind: 15,
            streak: 'L3',
            logo: <MIA size={130}/>,
            primaryColor: '#98002e'

        },
        {
            teamId: 8,
            teamName: 'Atlanta Hawks',
            wins: 38,
            losses: 38,
            winPct: 0.500,
            gamesBehind: 16.5,
            streak: 'W1',
            logo: <ATL size={130}/>,
            primaryColor: '#e03a3e'

        },
        {
            teamId: 9,
            teamName: 'Toronto Raptors',
            wins: 38,
            losses: 38,
            winPct: 0.500,
            gamesBehind: 16.5,
            streak: 'W3',
            logo: <TOR size={130}/>,
            primaryColor: '#ce1141'

        },
        {
            teamId: 10,
            teamName: 'Chicago Bulls',
            wins: 36,
            losses: 40,
            winPct: 0.474,
            gamesBehind: 18.5,
            streak: 'L2',
            logo: <CHI size={130}/>,
            primaryColor: '#ce1141'

        },
        {
            teamId: 11,
            teamName: 'Washington Wizards',
            wins: 34,
            losses: 42,
            winPct: 0.447,
            gamesBehind: 20.5,
            streak: 'W1',
            logo: <WAS size={130}/>,
            primaryColor: '#002b5c'

        },
        {
            teamId: 12,
            teamName: 'Indiana Pacers',
            wins: 33,
            losses: 44,
            winPct: 0.429,
            gamesBehind: 22,
            streak: 'L4',
            logo: <IND size={130}/>,
            primaryColor: '#002d62'

        },
        {
            teamId: 13,
            teamName: 'Orlando Magic',
            wins: 32,
            losses: 44,
            winPct: 0.421,
            gamesBehind: 22.5,
            streak: 'L1',
            logo: <ORL size={130}/>,
            primaryColor: '#0077c0'

        },
        {
            teamId: 14,
            teamName: 'Charlotte Hornets',
            wins: 26,
            losses: 51,
            winPct: 0.338,
            gamesBehind: 29,
            streak: 'W3',
            logo: <CHA size={130}/>,
            primaryColor: '#00788c'

        },
        {
            teamId: 15,
            teamName: 'Detroit Pistons',
            wins: 16,
            losses: 60,
            winPct: 0.221,
            gamesBehind: 38.5,
            streak: 'L7',
            logo: <DET size={130}/>,
            primaryColor: '#1d428a',

        },
    ];
    return (
        <Box sx={styles.eastern}>
            <StandingsTable conferenceName="EASTERN" standingsData={easternStandingsData} />
        </Box>
    );
};
const WesternStandings = () => {
    const westernStandingsData = [
        {
            teamId: 1,
            teamName: 'Denver Nuggets',
            wins: 51,
            losses: 26,
            winPct: 0.662,
            gamesBehind: 0,
            streak: 'L2',
            logo: <DEN size={130}/>,
            primaryColor: '#0e2240',

        },
        {
            teamId: 2,
            teamName: 'Memphis Grizzlies',
            wins: 49,
            losses: 28,
            winPct: 0.636,
            gamesBehind: 2,
            streak: 'W1',
            logo: <MEM size={130}/>,
            primaryColor: '#5d76a9'

        },
        {
            teamId: 3,
            teamName: 'Sacramento Kings',
            wins: 47,
            losses: 30,
            winPct: 0.610,
            gamesBehind: 4,
            streak: 'W2',
            logo: <SAC size={130}/>,
            primaryColor: '#5a2b81'

        },
        {
            teamId: 4,
            teamName: 'Phoenix Suns',
            wins: 42,
            losses: 35,
            winPct: 0.545,
            gamesBehind: 9,
            streak: 'W4',
            logo: <PHX size={130}/>,
            primaryColor: '#1d1160'

        },
        {
            teamId: 5,
            teamName: 'Golden State Warriors',
            wins: 41,
            losses: 37,
            winPct: 0.526,
            gamesBehind: 10.5,
            streak: 'W2',
            logo: <GSW size={130}/>,
            primaryColor: '#006bb6'

        },
        {
            teamId: 6,
            teamName: 'LA Clippers',
            wins: 41,
            losses: 38,
            winPct: 0.519,
            gamesBehind: 11,
            streak: 'L2',
            logo: <LAC size={130}/>,
            primaryColor: '#1d428a'

        },
        {
            teamId: 7,
            teamName: 'New Orleans Pelicans',
            wins: 40,
            losses: 38,
            winPct: 0.513,
            gamesBehind: 11.5,
            streak: 'W2',
            logo: <NOP size={130}/>,
            primaryColor: '#002b5c'

        },
        {
            teamId: 8,
            teamName: 'Los Angeles Lakers',
            wins: 39,
            losses: 38,
            winPct: 0.506,
            gamesBehind: 12,
            streak: 'W2',
            logo: <LAL size={130}/>,
            primaryColor: '#552583'

        },
        {
            teamId: 9,
            teamName: 'Minnesota Timberwolves',
            wins: 39,
            losses: 39,
            winPct: 0.500,
            gamesBehind: 12.5,
            streak: 'L2',
            logo: <MIN size={130}/>,
            primaryColor: '#0c2340'

        },
        {
            teamId: 10,
            teamName: 'Oklahoma City Thunder',
            wins: 38,
            losses: 40,
            winPct: 0.487,
            gamesBehind: 13.5,
            streak: 'L1',
            logo: <OKC size={130}/>,
            primaryColor: '#007ac1'

        },
        {
            teamId: 11,
            teamName: 'Dallas Mavericks',
            wins: 37,
            losses: 41,
            winPct: 0.474,
            gamesBehind: 14.5,
            streak: 'L2',
            logo: <DAL size={130}/>,
            primaryColor: '#0053bc'

        },
        {
            teamId: 12,
            teamName: 'Utah Jazz',
            wins: 36,
            losses: 41,
            winPct: 0.468,
            gamesBehind: 15,
            streak: 'L1',
            logo: <UTA size={130}/>,
            primaryColor: '#002b5c'

        },
        {
            teamId: 13,
            teamName: 'Portland Trail Blazers',
            wins: 32,
            losses: 45,
            winPct: 0.416,
            gamesBehind: 19,
            streak: 'L5',
            logo: <POR size={130}/>,
            primaryColor: '#e03a3e'


        },
        {
            teamId: 14,
            teamName: 'San Antonio Spurs',
            wins: 19,
            losses: 58,
            winPct: 0.247,
            gamesBehind: 32,
            streak: 'L6',
            logo: <SAS size={130}/>,
            primaryColor: '#000000'

        },
        {
            teamId: 15,
            teamName: 'Houston Rockets',
            wins: 19,
            losses: 59,
            winPct: 0.244,
            gamesBehind: 32.5,
            streak: 'W1',
            logo: <HOU size={130}/>,
            primaryColor: '#ce1141'

        },
    ];
    return (
        <Box sx={styles.western}>
            <StandingsTable conferenceName="WESTERN" standingsData={westernStandingsData} />
        </Box>
    );
};
const StandingsTable = ({ conferenceName, standingsData }) => {
    return (
        <Box mt={3}>
            <Box sx={styles.conferenceBox}>
                <Typography variant="h2" sx={styles.conferenceText}>
                    {conferenceName} CONFERENCE
                </Typography>
            </Box>
                {standingsData.map((team) => (
                    <Grid key={team.teamId} item sx={{paddingBottom: '1%'}}>
                        <Card>
                            <CardContent style={{padding: '0%'}}>
                                <Box sx={{...styles.box, backgroundColor: team.primaryColor}}>
                                    <Box sx={{...styles.index, backgroundColor:'rgba(28,28,28,1)'}}>
                                        <Typography variant="h1" component="div"  sx={styles.text}>
                                            {team.teamId}
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.teamLogo}>
                                        {team.logo}
                                    </Box>
                                    <Box sx={styles.textBox}>
                                        <Typography variant="h2" component="div"  sx={styles.dataText}>
                                            Wins: {team.wins} - Losses: {team.losses} | Streak: {team.streak}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
        </Box>
    );
};


export {EasternStandings, WesternStandings};