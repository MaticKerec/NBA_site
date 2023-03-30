import React from "react";
import { Box, Typography, Link } from '@mui/material';

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        backgroundColor: '#1c1c1c',
    },
    logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '10px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        textDecoration: 'none',
        marginLeft: 'auto',
        marginRight: '5%',
    },
    eachButton: {
        marginRight: '10%',
        color: 'white',
        fontSize: '18px',
        fontWeight: '500',
        fontFamily: 'Poppins',
    },
    nba: {
        color: 'white',
        fontSize: '25px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        marginLeft: '10px',
    }
};

const Footer = () => {
    return (
        <Box sx={{ }}>
            <Link href="/" underline="hover" style={styles.eachButton}>Home</Link>
            <Link href="https://www.nba.com/" underline="hover" style={styles.eachButton}>NBA Official site</Link>
        </Box>
    );
};

export default Footer;