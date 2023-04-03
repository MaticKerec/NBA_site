import BackgroundImage from "../assets/Img/2122-mobile-wallpaper-01.jpg"
import CardBackground from "../assets/Img/background.jpg"
import backgroundImage from "../assets/Img/2122-mobile-wallpaper-01.jpg";

const styles = {
    card: {
        width: '100%',
        backgroundColor: 'rgba(28,28,28,1)',
    },
    overlay: {
        backgroundImage: BackgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(28,28,28,1)',
    },
    innerBox: {
        float: 'left',
        backgroundImage: BackgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80px',
    },
    text: {
        color: 'rgba(255,255,255,1)',
        textAlign: 'center',
    },
    number: {
        color: 'rgba(255,255,255,1)',

    }
}
export default styles;