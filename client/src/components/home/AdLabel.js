import { Typography, Grid } from '@material-ui/core';
import { theme } from '../../themes/theme';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        '& p': {            
            fontSize: 20,
            fontStyle: 'italic',
            marginBottom: 20,
            textAlign: 'center',
            color: theme.palette.darkgreen.main,
            opacity: 0.8
        },
        '& h6': {
            textTransform: 'none',
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight: 700,
            textAlign: 'center',
            color: theme.palette.darkgreen.main,
            letterSpacing: 0
        },
        borderTop: '1px solid #d5d0d2',
        borderBottom: '1px solid #d5d0d2',
        padding: '80px 0'
    },
}))

export const AdLabel = () => {
    const classes = useStyles();
    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item>
                <Typography color='secondary'>
                    "Every flower should not be disappointed
                </Typography>
                <Typography color='secondary'>
                    Every story will be respected and cherished
                </Typography>
                <Typography color='secondary'>
                    A bouquet of stories
                </Typography>
                <Typography color='secondary'>
                    Waiting to reveal surprise and happiness"
                </Typography>
                <Typography color='secondary' variant='h6'>
                    - Ms LuLu Diary
                </Typography>
            </Grid>
        </Grid>
    )
}