import { Typography, Grid, TextField, Button, OutlinedInput, InputAdornment, Link } from '@material-ui/core';
import { theme } from '../themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import Header, { PromotionBanner } from '../components/Header';
import { Footer } from '../components/Footer';
import useWindowDimensions from '../utils/resize';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
    },
    container: {
        margin: '80px 0',
        maxWidth: 760,
        '& h6': {
            margin: '30px 0'
        },
        '& p': {
            marginBottom: 20
        }
    },
}))

export default function About() {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();
    return (
        <Grid container justify='center' className={classes.root}>
            <PromotionBanner />
            <Header />
            <Grid item container direction='column' alignItems='center'
                className={classes.container} spacing={10}
            >
                <Typography variant='h5' color='secondary'>
                    ABOUT US
                </Typography>
                <Grid item container direction='column' alignItems='flex-start'>
                    <Typography variant='subtitle2'>
                        Who We Are
                    </Typography>
                    <Typography variant='body2'>
                        Founded in 2019, Ms Lulu Diary is an online flower shop, designed to inspire anyone to live a more beautiful and happy life at home. At Ms Lulu Diary , we believe “everybody are not ordinary, Your flowers shouldn't be either”.
                    </Typography>
                    <Typography variant='body2'>
                        Tell me your individual love story, we will translate this into a one-of-a-kind floral.
                    </Typography>
                </Grid>
                <Grid item>
                    <img src="https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1_480x480.png" alt=""/>
                </Grid>
                <Grid item container direction='column' alignItems='flex-start'>
                    <Typography variant='subtitle2'>
                        Our Goal
                    </Typography>
                    <Typography variant='body2'>
                        We believe that everyone should love their living space. Ms Lulu Diary is here to creates timeless and yet of-the-moment designs for those who seek to bring nature inside, be it to their desk, table or celebration event.
                    </Typography>
                    <Typography variant='body2'>
                        Our clients seek out unique botanicals and love our signature style that marries elegance and whimsy. Valuing relationships and passion for beautiful flowers, our artists relay messages of love, loss, support and celebration through thoughtful time.
                    </Typography>
                </Grid>
                <Grid item>
                    <img src="https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1_1_480x480.png" alt=""/>
                </Grid>
                <Grid>
                    <Typography variant='subtitle2'>
                        Our Shop
                    </Typography>
                    <Typography variant='body2'>
                        On our site, we offer a variety of services which are backed with the optimum utilization of our resources. Our advanced technology based systems have helped us streamline the sourcing of flowers directly from growers and export markets, as well as manage timely and efficient delivery of the selected arrangements. We want to make a difference to how people express themselves and provide utmost satisfaction. We hope you enjoy the flowers as much as we do.
                    </Typography>
                </Grid>
                <Grid item>
                    <img src="https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1_2_480x480.png" alt=""/>
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    )
}