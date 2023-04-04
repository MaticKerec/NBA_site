import backgroundImage from "../assets/Img/zachLavine_background.jpg";

const styles = {
    overlay: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '1%',
    },
    standings: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'},
    conferenceBox: {
        backgroundColor: '#1c1c1c',
        padding: '1%',
        marginBottom: '1%',
    },
    conferenceText: {
        color: '#fff',

        fontWeight: 'bold',
        textAlign: 'center',
    },
    switchConference: {
        color: '#fff',
        backgroundColor: '#1c1c1c',
        padding: '1%',
        fontSize: '25px',
        marginBottom: '15px',
    },
    western: {
        backgroundColor: ''
    },
    eastern: {
        backgroundColor: ''

    },
    box: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "5px",
        height: "100%",
        overflow: "hidden"
    },
    index: {
        width: "95px",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: "4rem",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    teamLogo: {
        width: "130px",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        overflow: "hidden",
        margin: "0 10px"
    },
    logoImg: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    textBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexGrow: 1,
        padding: "10px 0"
    },
    dataText: {
        fontFamily: '',
        color: "#fff",
        fontWeight: 'bold',
        fontSize: "2.5rem",
        textShadow: '1px 1px #000',
        marginTop: 'auto',
    },
    eachButton: {
        color: 'white',
        fontSize: '35px',
        fontWeight: '500',
        fontFamily: 'Poppins',
        fontweight: 'bold',
        textDecoration: 'none',
        backgroundColor: 'rgba(152, 0,46, 1)',
    },
};

export default styles;
