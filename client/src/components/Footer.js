import { Typography, Grid, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { theme } from '../themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        borderTop: '1px solid #d5d0d2',
        padding: '80px 0'
    },
    containerRight: {
        marginTop: 30
    },
    containerLeft: {
        '& a span': {
            fontSize: 14,
            fontWeight: 300
        }
    },
    title: {
        padding: '0 16px'
    },
    copyright: {
        background: theme.palette.primary.main,
        paddingBottom: 30,
        '& a': {
            marginLeft: 80,
            textDecoration: 'none'
        }
    }
}))

function ListItemLink(props) {
    return (
        <ListItem button
            component="a"
            {...props}
        />
    );
}

export const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container justify='center' direction='row' className={classes.root}>
                <Grid item className={classes.containerLeft} md={3}>
                    <Typography variant='overline' className={classes.title}>
                        LINKS
                </Typography>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItemLink href="#">
                            <ListItemText primary="Track My Order" />
                        </ListItemLink>
                        <ListItemLink href="#">
                            <ListItemText primary="FAQs" />
                        </ListItemLink>
                        <ListItemLink href="#">
                            <ListItemText primary="Refund Policy" />
                        </ListItemLink>
                        <ListItemLink href="#">
                            <ListItemText primary="Shipping Information" />
                        </ListItemLink>
                        <ListItemLink href="#">
                            <ListItemText primary="Contact Us" />
                        </ListItemLink>
                        <ListItemLink href="#">
                            <ListItemText primary="Terms of Service" />
                        </ListItemLink>
                        <ListItemLink href="#">
                            <ListItemText primary="Privacy Policy" />
                        </ListItemLink>
                    </List>
                </Grid>
                <Grid item md={3}>
                    <Typography variant='overline' className={classes.title}>
                        FOLLOW US
                    </Typography>
                    <Grid container className={classes.containerRight}>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <PinterestIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.copyright}>
                <Grid item>
                    <Link to='/'>
                        <Typography variant='overline'>
                            © Ms LuLu Diary
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}