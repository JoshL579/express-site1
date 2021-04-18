import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/home/Header';
import ScrollToColor from '../utils/ScrollToColor';
import { Grid, Typography } from '@material-ui/core';
import { HomeCarousel } from '../components/home/Carousel';
import { StorySlide } from '../components/home/StorySlide';
import useWindowDimensions from '../utils/resize';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .carousel-root': {
            marginTop: -66,
        },
    },
    headBadge: {
        backgroundColor: theme.palette.primary.main,
        letterSpacing: 2.2,
        fontSize: 12,
        padding: 6
    },
    
}))

export default function Home() {    
    const { height, width } = useWindowDimensions();
    const classes = useStyles();
    return (
        <>
            <Grid container justify="center"
                alignItems="center"
                direction='row'
                className={classes.headBadge} >
                <Typography variant="overline" color='secondary'>
                    FREE SHIPPING ON ORDERS OVER $140 CAD
                </Typography>
            </Grid>
            <Grid container className={classes.root}>
                <ScrollToColor>
                    <Header />
                </ScrollToColor>
                <HomeCarousel height={height} />
                <StorySlide />
            </Grid>            
        </>
    )
}