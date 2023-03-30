import React from "react";
import { Box, Typography, Link, Grid } from '@mui/material';
import styles from "../JS/styles.js"
const Footer = () => {
    return (
        <Grid container style={styles.footer}>
            <Grid item xs={12} md={4}>
                <Grid container direction="column" spacing={1} >
                    <Grid item>
                        <Link href="/" underline="hover" sx={styles.footerText}>Home</Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.nba.com/" underline="hover" sx={styles.footerText}>NBA Official Website</Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.espn.com/nba/" underline="hover" sx={styles.footerText}>ESPN-NBA</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid item>
                    <Link href="/teams" underline="hover" style={styles.footerText}>Teams</Link>
                </Grid>
                <Grid item>
                    <Link href="/teams" underline="hover" style={styles.footerText}>Teams</Link>
                </Grid>
                <Grid item>
                    <Link href="/teams" underline="hover" style={styles.footerText}>Teams</Link>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="body1" color="inherit" sx={{ margin: 0 }}>
                    Column 3 content here
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;