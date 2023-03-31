import {Toolbar, IconButton, Button, Box, Typography, Link} from '@mui/material';
import Logo from '../assets/Img/nba-logo-transparent.png';
import { createTheme, ThemeProvider } from '@mui/material';
import React from "react";
import styles from "../JS/styles.js";
function LogoComponent({ sx }) {
    return (
        <Box sx={sx}>
            <img src={Logo} alt="Logo" style={{ height: '80px'}} />
        </Box>
    );
}
export default function Header() {
    return (
        <Toolbar sx={{...styles.toolbar}}>
            <LogoComponent sx={styles.logo}/>
            <Link href="/" sx={styles.nba}>
                NBA DATABASE
            </Link>
            <Box sx={styles.boxHeader}>
                <Button sx={styles.eachButton}>
                    <Link href="/" underline="hover" style={styles.headerText}>
                        HOME
                    </Link>
                </Button>
                <Button sx={styles.eachButton}>
                    <Link href="/teams" underline="hover" style={styles.headerText}>
                        TEAMS
                    </Link>
                </Button>
                <Button sx={styles.eachButton}>
                    <Link href="/players" underline="hover" style={styles.headerText}>
                        PLAYERS
                    </Link>
                </Button>
            </Box>
        </Toolbar>
    );
}
