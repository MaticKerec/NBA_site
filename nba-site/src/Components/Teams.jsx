import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid  } from '@mui/material';
import { TOR, MIL, BOS, MIA, PHI, IND, BKN, ORL, CHA, CHI, DET, WAS, CLE, NYK, ATL, DEN, MEM, SAC, PHX, LAC, GSW, DAL, MIN, OKC, UTA, LAL, NOP, POR, SAS, HOU } from 'react-nba-logos';
import styles from "../JS/styles.js";
export default function Teams() {
    const teams = [
        { name: 'Toronto Raptors', logo: <TOR size={200}/> },
        { name: 'Milwaukee Bucks', logo: <MIL size={200}/> },
        { name: 'Boston Celtics', logo: <BOS size={200}/> },
        { name: 'Miami Heat', logo: <MIA size={200}/> },
        { name: 'Philadelphia 76ers', logo: <PHI size={200}/> },
        { name: 'Indiana Pacers', logo: <IND size={200}/> },
        { name: 'Brooklyn Nets', logo: <BKN size={200}/> },
        { name: 'Orlando Magic', logo: <ORL size={200}/> },
        { name: 'Charlotte Hornets', logo: <CHA size={200}/> },
        { name: 'Chicago Bulls', logo: <CHI size={200}/> },
        { name: 'Detroit Pistons', logo: <DET size={200}/> },
        { name: 'Washington Wizards', logo: <WAS size={200}/> },
        { name: 'Cleveland Cavaliers', logo: <CLE size={200}/> },
        { name: 'New York Knicks', logo: <NYK size={200}/> },
        { name: 'Atlanta Hawks', logo: <ATL size={200}/> },
        { name: 'Denver Nuggets', logo: <DEN size={200}/> },
        { name: 'Memphis Grizzlies', logo: <MEM size={200}/> },
        { name: 'Sacramento Kings', logo: <SAC size={200}/> },
        { name: 'Phoenix Suns', logo: <PHX size={200}/> },
        { name: 'Los Angeles Clippers', logo: <LAC size={200}/> },
        { name: 'Golden State Warriors', logo: <GSW size={200}/> },
        { name: 'Dallas Mavericks', logo: <DAL size={200}/> },
        { name: 'Minnesota Timberwolves', logo: <MIN size={200}/> },
        { name: 'Oklahoma City Thunder', logo: <OKC size={200}/> },
        { name: 'Utah Jazz', logo: <UTA size={200}/> },
        { name: 'Los Angeles Lakers', logo: <LAL size={200}/> },
        { name: 'New Orleans Pelicans', logo: <NOP size={200}/> },
        { name: 'Portland Trail Blazers', logo: <POR size={200}/> },
        { name: 'San Antonio Spurs', logo: <SAS size={200}/> },
        { name: 'Houston Rockets', logo: <HOU size={200}/> }
    ];
    return (
        <Grid container spacing={1} sx={styles.overlay}>
            {teams.map((team) => (
                <Grid item xs={12} sm={6} md={4} key={team.name} sx={styles.cardStyle}>
                    <Card sx={{ ...styles.cardObject }}>
                        <Grid container direction="column">
                            <Grid item sx={styles.logoStyle}>
                                <CardMedia>{team.logo}</CardMedia>
                            </Grid>
                            <Grid item>
                                <CardContent sx={styles.cardContent}>
                                    <Typography variant="h4" align="center" gutterBottom sx={styles.cardText}>
                                        {team.name}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
