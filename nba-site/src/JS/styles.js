import backgroundCardImage from "../assets/Img/background.jpg";
import backgroundImage from "../assets/Img/2122-mobile-wallpaper-01.jpg"

const styles = {
    toolbar: {
        height: '100px',
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: '#1c1c1c',
    },
    nba: {
        color: 'white',
        fontSize: '50px',
        fontWeight: '600',
        fontFamily: 'Poppins',
        textDecoration: 'none',
        marginRight: "auto",
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-10px',
        height: '150px',
        backgroundColor: '#1c1c1c',
        color: 'white',
        position: 'sticky',
        paddingLeft: '10%',
    },
    h1: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        textShadow: '4px 4px 4px rgba(0,0,0,1)'


    },
    h3: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingTop: '150px',
        fontFamily: 'Poppins, sans-serif',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    overlay: {
        backgroundColor: 'rgba(23,23,23)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '1',
    },
    cardText: {
        color: 'rgba(255,255,255)',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600',
        textShadow: '5px 2px 6px rgba(0,0,0,.8)'
    },
    cardContent: {
        margin: '0',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,.3)',
    },
    cardObject: {
        margin: '15px auto 20px auto',
        height: '270px',
        width: '80%',
        backgroundImage: `url(${backgroundCardImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        fontSize: '25px',
        fontWeight: 'bold',
        borderRadius: '15%',

    },
    logoStyle: {
        paddingTop: '10px',
        paddingBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        height: '200px',
        backgroundColor: 'rgba(255,255,255,.9)',

    },
    cardStyle: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '20px',
    },
    conference: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    boxHeader: {
        display: "flex",
        gap: "1rem",
        color: 'white',
        marginRight: '5%',
    },
    region: {
        width: '100%',
        height: '100%',
        top: '0%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#1c1c1c',
        padding: '5%',
        fontFamily: 'Poppins, sans-serif',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    },
    headerText: {
        textTransform: "none",
        color: 'white',
        fontSize: '25px',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        textDecoration: 'none',
    },
    eachButton: {
        textTransform: "none",
        margin: 'auto',
        width: '100%',
        color: 'white',
        fontSize: '25px',
        fontWeight: '500',
        fontFamily: 'Poppins',
        textDecoration: 'none',
    },
    footerText: {
        textTransform: "none",
        color: 'white',
        fontSize: '18px',
        fontWeight: '500',
        fontFamily: 'Poppins',
        textDecoration: 'none',
    },
    headerButton: {
        marginRight: '20%',
        fontSize: '18px',
        fontWeight: '500',
        fontFamily: 'Poppins',
        textDecoration: 'none',
    },
    teams: {
        color: 'white',
        fontSize: '30px',
        fontWeight: '500',
        fontFamily: 'Poppins',
        borderColor: 'white',
        borderWidth: '3px',
        float: 'left',
        textDecoration: 'underline',
        textDecorationThickness : '1px',
        textUnderlineOffset : '12px',
        padding:"5%",
    },
    switchConference : {
        display: 'inline-block',
        position: 'flex',
        color: 'white',
        borderColor: 'white',
        borderWidth: '3px',
        fontFamily: 'Poppins, sans-serif',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        top: '0%',
        marginTop: '5%',
    },
    standings: {
        color: 'white',
        fontSize: '50px',
        fontWeight: '500',
        fontFamily: 'Poppins',
        borderColor: 'white',
        borderWidth: '3px',
        float: 'left',
        display: 'inline-block',
    },
    logo: {
        opacity: '1',
        display: 'block',
        marginRight: '5px',
        width: '3%',
        height: 'auto',
        transition: '.5s ease',
        backfaceVisibility: 'hidden',
        marginLeft: '1%',
    },
    row : {
        margin: '8px',
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};
export default styles;
