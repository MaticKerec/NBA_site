import {Toolbar, Button, Box, Typography, Link} from '@mui/material';
import Logo from '../assets/Img/nba-logo-transparent.png';
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
                <Button sx={{...styles.eachButton, width: '80px'}}>
                    <Link href="/" underline="hover" style={styles.headerText}>
                        HOME
                    </Link>
                </Button>
                <Button sx={{...styles.eachButton, width: '100px'}}>
                    <Link href="/teams" underline="hover" style={styles.headerText}>
                        TEAMS
                    </Link>
                </Button>
                <Button sx={{...styles.eachButton, width: '160px'}}>
                    <Link href="/standings" underline="hover" style={styles.headerText}>
                        STANDINGS
                    </Link>
                </Button>
            </Box>
        </Toolbar>
    );
}
