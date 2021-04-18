import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .control-dots': {
            textAlign: 'right!important',
            padding: '20px 30px!important'
        },
        '& .animated': {
            transition: 'all 0.5s 0s step-start!important'
        },
        '& .selected': {
            animation: `$fadein 2.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
            '& p,button': {
                '-webkit-animation': `$slide-in-bottom 1.2s linear 0.3s both`,
                animation: `$slide-in-bottom 1.2s linear 0.3s both`
            }
        },
    },
    '@keyframes fadein': {
        '0%': {
            opacity: 0
        },
        '100%': {
            opacity: 1
        }
    },
    '@-webkit-keyframes slide-in-bottom': {
        '0%': {
            '-webkit-transform': 'translateY(300px)',
            transform: 'translateY(300px)',
            opacity: 0.5,
            margin: '50px 0'
        },
        '100%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)',
            opacity: 1,
            margin: '14px 0'
        }
    },
    '@keyframes slide-in-bottom': {
        '0%': {
            '-webkit-transform': 'translateY(300px)',
            transform: 'translateY(300px)',
            opacity: 0.5,
            margin: '50px 0'
        },
        '100%': {
            '-webkit-transform': 'translateY(0)',
            transform: 'translateY(0)',
            opacity: 1,
            margin: '14px 0'
        }
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    legend: {
        position: 'absolute',
        bottom: 70,
        padding: '0 70px',
        width: '100%',
        textAlign: 'start'
    },
    legendHeaderLarge: {
        textTransform: 'uppercase',
        fontSize: 22,
        letterSpacing: 4.4,
        margin: '14px 0'
    },
    legendHeaderSmall: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 2.4,
        margin: '14px 0',
        fontWeight: 300
    },
}))

export const HomeCarousel = (props) => {
    const classes = useStyles();
    const slides = [
        {
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1112_1000x.png',
            headerLarge: 'BESPOKE FLOWER ARRANGEMENT',
            headerSmall: 'Fresh Flower',
            buttonText: 'VIEW MORE'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/Bespoke_Flower_Arrangement_1200x.jpg',
            headerLarge: 'The Bouquet of Stories',
            headerSmall: 'Faux Flower',
            buttonText: 'SHOP NOW'
        },
    ];
    const { height } = props;
    return (
        <Carousel
            autoPlay
            interval={5000}
            infiniteLoop
            emulateTouch
            swipeable
            preventMovementUntilSwipeScrollTolerance={false}
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
                    <div className={classes.legend}>
                        <Typography color='primary' className={classes.legendHeaderSmall}>
                            {slide.headerSmall}
                        </Typography>
                        <Typography color='primary' className={classes.legendHeaderLarge}>
                            {slide.headerLarge}
                        </Typography>
                        <Button variant="contained" color="primary" disableElevation>
                            {slide.buttonText}
                        </Button>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}