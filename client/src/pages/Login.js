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
        minHeight: 345,
        maxWidth: 400,
        padding: 15
    },
    labelText: {
        marginBottom: 15
    },
    input: {
        margin: '10px 0',
    },
    //customize TextField size
    input2: {
        height: 20.188,
        padding: '10.5px 14px'
    },
    inputLabel: {
        top: -8,
        '&.Mui-focused': {
            top: 0
        }
    },
    //---------
    btn: {
        margin: '10px 0 20px 0',
        height: 41.18
    },
    link: {
        fontSize: 14,
        textDecoration: 'none',
        color: 'inherit'
    }
}))

export default function Login() {
    const classes = useStyles();
    const { height, width } = useWindowDimensions();
    return (
        <Grid container justify='center' className={classes.root}>
            <PromotionBanner />
            <Header />
            <Grid item container direction='column' alignItems='center'
                className={classes.container}
                style={{
                    marginTop: (height - 475) / 2,
                    marginBottom: (height - 435) / 2
                }}
            >
                <Typography variant='h5' color='secondary'>
                    Login
                </Typography>
                <Typography variant='body2' className={classes.labelText}>
                    Please enter your e-mail and password:
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    color='secondary'
                    size='small'
                    fullWidth
                    className={classes.input}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    color='secondary'
                    type='password'
                    fullWidth
                    className={classes.input}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <Link href="#" className={classes.link}>
                                    Forgot password?
                                </Link>
                            </InputAdornment>,
                        classes: { input: classes.input2 }
                    }}
                    InputLabelProps={{ classes: { root: classes.inputLabel } }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    disableElevation
                    fullWidth
                    className={classes.btn}
                >
                    LOGIN
                </Button>
                <Typography variant='body2'>
                    Don't have an account?&nbsp;
                    <Link href='/signup' className={classes.link}>
                        Create one
                    </Link>
                </Typography>
            </Grid>
            <Footer />
        </Grid>
    )
}