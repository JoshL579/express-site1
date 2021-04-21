import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Link,
    Grid,
    SvgIcon
} from '@material-ui/core';
import { theme } from '../themes/theme';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';


const useStyles = makeStyles((theme) => ({
    headBadge: {
        backgroundColor: theme.palette.primary.main,
        letterSpacing: 2.2,
        fontSize: 12,
        padding: 6
    },
    container: {
        border: 'none',
        boxShadow: 'none',
        height: 66,
        backgroundColor: '#ffffff'
    },
    navlink: {
        margin: '6px 21px',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 2.4,
        color: theme.palette.darkgreen.main,
        boxSizing: 'border-box',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    navRightIcons: {
        marginLeft: 'auto'
    }
}))

const NavLink = (props) => {
    const classes = useStyles();
    //const preventDefault = (event) => event.preventDefault();
    return (
        <Link
            href={props.to ? props.to : '#'}
            //onClick={preventDefault}
            color='secondary'
            variant="body2"
            className={classes.navlink}
        >
            {props.text}
        </Link>
    )
}

export default function Header(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <AppBar position="sticky" style={props.style}
            className={classes.container}>
            <Toolbar>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item>
                        <IconButton>
                            <img src="https://cdn.shopify.com/s/files/1/0519/0542/9670/files/Ms_0d861bc7-9edb-4ab4-a0a2-7b3e96441403_100x.png?v=1614795317" alt="logo" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <NavLink text='Home' to="/" />
                        <NavLink text='Story Bouquet (Faux Flower)' />
                        <NavLink text='Bespoke Flower Arrangement' />
                        <NavLink text='About Us' />
                    </Grid>
                    <Grid item className={classes.navRightIcons}>
                        <IconButton onClick={() => { history.push('/login') }}>
                            <PermIdentityOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <IconButton>
                            <LocalMallOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export const PromotionBanner = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center"
            alignItems="center"
            direction='row'
            className={classes.headBadge} >
            <Typography variant="overline" color='secondary'>
                FREE SHIPPING ON ORDERS OVER $140 CAD
            </Typography>
        </Grid>
    )
}