import styles from "../JS/standings"
import { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { EasternStandings, WesternStandings } from "./StandingsCards.jsx";
const Standings = () => {
    const [isEastern, setIsEastern] = useState(true);
    const handleToggleStandings = () => {
        setIsEastern(!isEastern);
    };
    return (
        <Box sx={styles.overlay}>
            <Grid container spacing={3} sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={12} md={10}>
                    {isEastern ? <EasternStandings /> : <WesternStandings />}
                </Grid>
                <Box onClick={handleToggleStandings} sx={styles.switchConference}>
                    {isEastern ? 'Switch to Western Standings' : 'Switch to Eastern Standings'}
                </Box>
            </Grid>

        </Box>
    );
};
export default Standings;
