import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Typography,
    Grid,
    Button
} from '@material-ui/core';
import { theme } from '../../themes/theme';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        padding: '10px 0'
    },
    iconButton: {
        position: 'absolute',
        boxShadow: '0 2px 10px rgb(54 54 54 / 15%)',
        width: 50,
        height: 50,
        left: 'calc(50% - 25px)',
        bottom: 5,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    },
    header: {
        padding: '70px 0'
    },
    headerTextLarge: {
        textTransform: 'uppercase',
        fontSize: 22,
        letterSpacing: 4.4,
        margin: '16px 0 70px 0'
    },
    headerTextSmall: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 2.4,
        margin: '12px 0',
        fontWeight: 300
    },
    slideContainer: {
        padding: '0 90px'
    },
    card: {
        width: '25%'
    },
    img: {
        height: 221.5
    },
    arrowLast: {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 50,
        height: 50,
        cursor: 'pointer',
        left: 15,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        boxShadow: '0 2px 10px rgb(54 54 54 / 15%)',
        '& span': {
            paddingLeft: 5
        }
    },
    arrowNext: {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 50,
        height: 50,
        cursor: 'pointer',
        right: 15,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        boxShadow: '0 2px 10px rgb(54 54 54 / 15%)',
    },
    bottonBtn: {
        padding: '80px 0'
    }
}))

export const SlideDown = () => {
    const classes = useStyles();
    const handleSlideDown = () => {
        console.log('slide down')
    }
    return (
        <div>
            <IconButton className={classes.iconButton} onClick={handleSlideDown}>
                <KeyboardArrowDownIcon />
            </IconButton>
        </div>
    )
}

export const StorySlide = () => {
    const classes = useStyles();

    const slides = [
        {
            id: 1,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/O1CN01910MFF24nHMaEjHg1__159877435_400x.jpg',
            headerText: 'You are my sunshine',
            buttonText: 'VIEW MORE'
        },
        {
            id: 2,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/O1CN01lx70ZW24nHKsrpWI1__159877435_400x.jpg',
            headerText: 'Garden Of Sunshine',
            buttonText: 'SHOP NOW'
        },
        {
            id: 3,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/O1CN01RL5YLr24nHJhUzQxd__159877435_400x.jpg',
            headerText: 'Endless Lovelies Bouquet',
            buttonText: 'SHOP NOW'
        },
        {
            id: 4,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/O1CN01a2P5252Cf3Awg9mJq__202448500_400x.jpg',
            headerText: 'One Fine Day',
            buttonText: 'SHOP NOW'
        },
        {
            id: 5,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/O1CN01hCGqmG24nHIHyLRKV__159877435_400x.jpg',
            headerText: 'Flourishing Beauty',
            buttonText: 'VIEW MORE'
        },
        {
            id: 6,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/O1CN01EC2iro24nHF6n6EZo__159877435_400x.jpg',
            headerText: 'Meant To Be',
            buttonText: 'SHOP NOW'
        },
        {
            id: 7,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/TB2HGEjmAZmBKNjSZPiXXXFNVXa__159877435_400x.jpg',
            headerText: 'Desert Sunrise',
            buttonText: 'SHOP NOW'
        },
        {
            id: 8,
            image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/products/O1CN01Klqx8s24nHJeJnSt9__159877435_400x.jpg',
            headerText: 'Amethyst Mood',
            buttonText: 'SHOP NOW'
        },
    ];

    const HomeSlideCard = (props) => {
        return (
            <Grid item className={classes.card}>
                <img src={props.image} alt="" />
                <Typography className={classes.headerTextSmall}>
                    MS LULU DIARY
                </Typography>
                <Typography className={classes.headerTextSmall}>
                    {props.headerText}
                </Typography>
            </Grid>
        )
    }

    return (
        <>
            <SlideDown />
            <Grid container className={classes.root} direction='column'
                justify='flex-start' alignItems='center'>
                <Grid item className={classes.header}>
                    <Typography color='secondary' className={classes.headerTextSmall}>
                        THE STORY YOU WANT KNOW
                    </Typography>
                    <Typography color='secondary' className={classes.headerTextLarge}>
                        STORY BOUQUET
                    </Typography>
                </Grid>
                <Grid item container justify='center'>
                    <Carousel
                        autoPlay={false}
                        emulateTouch
                        swipeable
                        preventMovementUntilSwipeScrollTolerance={false}
                        showStatus={false}
                        showThumbs={false}
                        showArrows
                        showIndicators={false}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <IconButton onClick={onClickHandler}
                                    className={classes.arrowLast}>
                                    <ArrowBackIosIcon />
                                </IconButton>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <IconButton onClick={onClickHandler}
                                    className={classes.arrowNext}>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            )
                        }
                    >
                        <Grid item container className={classes.slideContainer}>
                            {slides.map((slide, index) => {
                                if (index / 4 < 1) {
                                    return (
                                        <HomeSlideCard
                                            key={slide.id}
                                            image={slide.image}
                                            headerText={slide.headerText}
                                        />
                                    )
                                }
                            })}
                        </Grid>
                        <Grid item container className={classes.slideContainer}>
                            {slides.map((slide, index) => {
                                if (index / 4 >= 1 && index / 4 <= 2) {
                                    return (
                                        <HomeSlideCard
                                            key={slide.id}
                                            image={slide.image}
                                            headerText={slide.headerText}
                                        />
                                    )
                                }
                            })}
                        </Grid>
                    </Carousel>
                </Grid>
                <Grid item className={classes.bottonBtn}>
                    <Button
                         variant="contained" color="secondary" disableElevation
                    >
                        SHOP NOW
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}