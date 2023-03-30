import {Toolbar, IconButton, Button, Box, Typography} from '@mui/material';
import Logo from '../Img/nba-logo-transparent.png';
import { createTheme, ThemeProvider } from '@mui/material';
function LogoComponent({ sx }) {
    return (
        <Box sx={sx}>
            <img src={Logo} alt="Logo" style={{ height: '50px'}} />
        </Box>
    );
}
const styles = {
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#1c1c1c',
        top: '0',
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
export default function Header() {
    return (
        <Toolbar sx={{...styles.toolbar}}>
            <LogoComponent sx={styles.logo}/>
            <Button sx={styles.nba}>NBA DATABASE</Button>
            <Box sx={styles.buttons}>
                <Button sx={styles.eachButton}>Home</Button>
                <Button sx={styles.eachButton}>Teams</Button>
                <Button sx={styles.eachButton}>Players</Button>
            </Box>
        </Toolbar>
    );
}
