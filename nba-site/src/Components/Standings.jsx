import { Box, Grid } from '@mui/material';
import styles from "../JS/standings"
import { EasternStandings, WesternStandings } from "./StandingsCards.jsx";
import React from "react";
const Standings = () => {
    return (
        <Box sx={styles.overlay}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <EasternStandings/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <WesternStandings/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Standings;
