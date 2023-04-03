import backgroundImage from "../assets/Img/2122-mobile-wallpaper-01.jpg";
import standing from "../assets/Img/background.jpg";

const styles = {
    overlay: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '1%',

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
        width: "80px",
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
};

export default styles;
