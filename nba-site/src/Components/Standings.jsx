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
            <Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={7}>
                    <Grid container spacing={3} direction="column">
                        <Grid item sx={styles.conferenBox}>
                            {isEastern ? <EasternStandings /> : <WesternStandings />}
                        </Grid>
                        <Grid item sx={{ display: 'flex', justifyContent: 'center',marginTop: '35px' }}>
                            <Button
                                onClick={handleToggleStandings}
                                sx={{ ...styles.eachButton, '&:hover': { backgroundColor: 'rgba(0, 119,192, 1)', color: 'rgba(255,255,255,1)'} }}
                            >
                                {isEastern ? 'Switch to Western Standings' : 'Switch to Eastern Standings'}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Standings;
