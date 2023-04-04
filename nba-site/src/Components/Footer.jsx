import React from "react";
import { Box, Typography, Link, Grid } from '@mui/material';
import styles from "../JS/styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Grid container sx={styles.footer}>
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
                    <Link href="/teams" underline="hover" style={styles.footerText}>Standings</Link>
                </Grid>
                <Grid item>
                    <Link href="/teams" underline="hover" style={styles.footerText}>Teams</Link>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid item>
                    <Typography variant="body1" color="inherit" style={styles.footerText}>
                        Social media:

                    </Typography>
                </Grid>
                <Grid item>
                    <a href="https://www.facebook.com/nba/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} style={styles.footerIcons} />
                    </a>
                    <a href="https://www.twitter.com/nba/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} style={styles.footerIcons}/>
                    </a>
                    <a href="https://www.instagram.com/nba/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} style={styles.footerIcons}/>
                    </a>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;