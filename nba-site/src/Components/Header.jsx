import {Toolbar, IconButton, Button, Box, Typography, Link} from '@mui/material';
import Logo from '../assets/Img/nba-logo-transparent.png';
import { createTheme, ThemeProvider } from '@mui/material';
import React from "react";
import styles from "../JS/styles.js";
function LogoComponent({ sx }) {
    return (
        <Box sx={sx}>
            <img src={Logo} alt="Logo" style={{ height: '50px'}} />
        </Box>
    );
}
export default function Header() {
    return (
        <Toolbar sx={{  ...styles.toolbar}}>
            <LogoComponent sx={styles.logo}/>
            <Button sx={styles.nba}>
                <Link href="/" underline="hover" style={{...styles.headerText}}>Teams
                    NBA DATABASE
                </Link>
            </Button>
            <Box sx={styles.boxHeader}>
                <Button sx={styles.eachButton}>Home</Button>
                <Button sx={styles.eachButton}>Teams</Button>
                <Button sx={styles.eachButton}>Players</Button>
            </Box>
        </Toolbar>
    );
}
