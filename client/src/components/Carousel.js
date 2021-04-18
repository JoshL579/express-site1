import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/theme';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .control-dots': {
            textAlign: 'right',
            padding: '20px 30px'
        }
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}))

export const HomeCarousel = (props) => {
    const classes = useStyles();
    const slides = [
        { image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1112_1000x.png' },
        { image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/Bespoke_Flower_Arrangement_1200x.jpg' },
    ];
    const { height } = props;
    return (
        <Carousel
            interval={3000}
            autoplay
            infiniteLoop
            emulateTouch
            swipeable
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            className={classes.root}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    style={{ height: height - 70 }}
                >
                    <img src={slide.image} className={classes.img} alt='img' />
                </div>
            ))}
        </Carousel>
    )
}