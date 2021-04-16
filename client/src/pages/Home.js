import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import ScrollToColor from '../utils/ScrollToColor';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.primary.main,
        backgroundSize: 'cover',
        backgroundImage: "url(https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1112_1000x.png?v=1616618855)",
        height: 800
    },
    headBadge: {
        backgroundColor: theme.palette.primary.main,
        letterSpacing: 2.2,
        fontSize: 12,
        padding: 6
    }
}))

export default function Home() {
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
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
                <div>home</div>
            </Grid>
        </>
    )
}