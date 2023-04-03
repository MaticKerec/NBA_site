import { Box, Grid } from '@mui/material';
import standings from "./Standings.jsx";
import { TOR, MIL, BOS, MIA, PHI, IND, BKN, ORL, CHA, CHI, DET, WAS, CLE, NYK, ATL, DEN, MEM, SAC, PHX, LAC, GSW, DAL, MIN, OKC, UTA, LAL, NOP, POR, SAS, HOU } from 'react-nba-logos';
import styles from "../JS/standings.js";
const EasternStandings = () => {
    const easternStandingsData = [
        {
            teamId: 1,
            teamName: 'Milwaukee Bucks',
            wins: 55,
            losses: 22,
            winPct: 0.714,
            gamesBehind: 0,
            streak: 'L1',
            logo: <MIL />
        },
        {
            teamId: 2,
            teamName: 'Boston Celtics',
            wins: 53,
            losses: 24,
            winPct: 0.688,
            gamesBehind: 2,
            streak: 'W1',
        },
        {
            teamId: 3,
            teamName: 'Philadelphia 76ers',
            wins: 50,
            losses: 26,
            winPct: 0.658,
            gamesBehind: 4.5,
            streak: 'W1',
        },
        {
            teamId: 4,
            teamName: 'Cleveland Cavaliers',
            wins: 48,
            losses: 29,
            winPct: 0.623,
            gamesBehind: 7,
            streak: 'L2',
        },
        {
            teamId: 5,
            teamName: 'New York Knicks',
            wins: 44,
            losses: 33,
            winPct: 0.571,
            gamesBehind: 11,
            streak: 'W2',
        },
        {
            teamId: 6,
            teamName: 'Brooklyn Nets',
            wins: 41,
            losses: 35,
            winPct: 0.539,
            gamesBehind: 13.5,
            streak: 'W1',
        },
        {
            teamId: 7,
            teamName: 'Miami Heat',
            wins: 40,
            losses: 37,
            winPct: 0.519,
            gamesBehind: 15,
            streak: 'L3',
        },
        {
            teamId: 8,
            teamName: 'Atlanta Hawks',
            wins: 38,
            losses: 38,
            winPct: 0.500,
            gamesBehind: 16.5,
            streak: 'W1',
        },
        {
            teamId: 9,
            teamName: 'Toronto Raptors',
            wins: 38,
            losses: 38,
            winPct: 0.500,
            gamesBehind: 16.5,
            streak: 'W3',
        },
        {
            teamId: 10,
            teamName: 'Chicago Bulls',
            wins: 36,
            losses: 40,
            winPct: 0.474,
            gamesBehind: 18.5,
            streak: 'L2',
        },
        {
            teamId: 11,
            teamName: 'Washington Wizards',
            wins: 34,
            losses: 42,
            winPct: 0.447,
            gamesBehind: 20.5,
            streak: 'W1',
        },
        {
            teamId: 12,
            teamName: 'Indiana Pacers',
            wins: 33,
            losses: 44,
            winPct: 0.429,
            gamesBehind: 22,
            streak: 'L4',
        },
        {
            teamId: 13,
            teamName: 'Orlando Magic',
            wins: 32,
            losses: 44,
            winPct: 0.421,
            gamesBehind: 22.5,
            streak: 'L1',
        },
        {
            teamId: 14,
            teamName: 'Charlotte Hornets',
            wins: 26,
            losses: 51,
            winPct: 0.338,
            gamesBehind: 29,
            streak: 'W3',
        },
        {
            teamId: 15,
            teamName: 'Detroit Pistons',
            wins: 16,
            losses: 60,
            winPct: 0.221,
            gamesBehind: 38.5,
            streak: 'L7',
        },
    ];

    return (
        <Box mt={3}>
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
        },
        {
            teamId: 2,
            teamName: 'Memphis Grizzlies',
            wins: 49,
            losses: 28,
            winPct: 0.636,
            gamesBehind: 2,
            streak: 'W1',
        },
        {
            teamId: 3,
            teamName: 'Sacramento Kings',
            wins: 47,
            losses: 30,
            winPct: 0.610,
            gamesBehind: 4,
            streak: 'W2',
        },
        {
            teamId: 4,
            teamName: 'Phoenix Suns',
            wins: 42,
            losses: 35,
            winPct: 0.545,
            gamesBehind: 9,
            streak: 'W4',
        },
        {
            teamId: 5,
            teamName: 'Golden State Warriors',
            wins: 41,
            losses: 37,
            winPct: 0.526,
            gamesBehind: 10.5,
            streak: 'W2',
        },
        {
            teamId: 6,
            teamName: 'LA Clippers',
            wins: 41,
            losses: 38,
            winPct: 0.519,
            gamesBehind: 11,
            streak: 'L2',
        },
        {
            teamId: 7,
            teamName: 'New Orleans Pelicans',
            wins: 40,
            losses: 38,
            winPct: 0.513,
            gamesBehind: 11.5,
            streak: 'W2',
        },
        {
            teamId: 8,
            teamName: 'Los Angeles Lakers',
            wins: 39,
            losses: 38,
            winPct: 0.506,
            gamesBehind: 12,
            streak: 'W2',
        },
        {
            teamId: 9,
            teamName: 'Minnesota Timberwolves',
            wins: 39,
            losses: 39,
            winPct: 0.500,
            gamesBehind: 12.5,
            streak: 'L2',
        },
        {
            teamId: 10,
            teamName: 'Oklahoma City Thunder',
            wins: 38,
            losses: 40,
            winPct: 0.487,
            gamesBehind: 13.5,
            streak: 'L1',
        },
        {
            teamId: 11,
            teamName: 'Dallas Mavericks',
            wins: 37,
            losses: 41,
            winPct: 0.474,
            gamesBehind: 14.5,
            streak: 'L2',
        },
        {
            teamId: 12,
            teamName: 'Utah Jazz',
            wins: 36,
            losses: 41,
            winPct: 0.468,
            gamesBehind: 15,
            streak: 'L1',
        },
        {
            teamId: 13,
            teamName: 'Portland Trail Blazers',
            wins: 32,
            losses: 45,
            winPct: 0.416,
            gamesBehind: 19,
            streak: 'L5',
        },
        {
            teamId: 14,
            teamName: 'San Antonio Spurs',
            wins: 19,
            losses: 58,
            winPct: 0.247,
            gamesBehind: 32,
            streak: 'L6',

        },
        {
            teamId: 15,
            teamName: 'Houston Rockets',
            wins: 19,
            losses: 59,
            winPct: 0.244,
            gamesBehind: 32.5,
            streak: 'W1',
        },
    ];

    return (
        <Box mt={3}>
            <StandingsTable conferenceName="WESTERN" standingsData={westernStandingsData} />
        </Box>
    );
};
const StandingsTable = ({ conferenceName, standingsData }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={styles.box}>
                <h2 style={styles.text}>{conferenceName} CONFERENCE STANDINGS</h2>
                <table style={styles.tableHead}>
                    <thead>
                    <tr sx={styles.standingsRow}>
                        <th>Pos.</th>
                        <th style={styles.firstColumn}>Team</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Win %</th>
                        <th>GB</th>
                        <th>Streak</th>
                    </tr>
                    </thead>
                    <Box component="tbody" sx={styles.standingsRow}>
                        {standingsData.map((team, index) => (
                            <tr key={team.teamId} style={styles.tableStyle}>
                                <td>#{index + 1}</td>
                                <td style={styles.teamsColumn}>{team.teamName}</td>
                                <td>{team.wins}</td>
                                <td>{team.losses}</td>
                                <td>{team.winPct.toFixed(3)}</td>
                                <td>{team.gamesBehind}</td>
                                <td>{team.streak}</td>
                            </tr>
                        ))}
                    </Box>
                </table>
            </Grid>
        </Grid>
    );
};

export { EasternStandings, WesternStandings };