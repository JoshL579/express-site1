import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    IconButton,
    Typography,
    Grid,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    TextField
} from '@material-ui/core';
import { theme } from '../../themes/theme';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '80px 0',
        backgroundColor: theme.palette.primary.main
    },
    media: {
        height: 140,
    },
    card: {
        margin: 10,
        '&:hover': {
            boxShadow: '0 2px 10px rgb(54 54 54 / 40%)',
        }
    },
    cardContent: {
        height: 185,
    },
    arrowLast: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: 50,
        height: 50,
        cursor: 'pointer',
        left: 0,
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
        bottom: 0,
        width: 50,
        height: 50,
        cursor: 'pointer',
        right: 0,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        boxShadow: '0 2px 10px rgb(54 54 54 / 15%)',
    },
    comment: {
        color: theme.palette.secondary.main,
        fontStyle: 'italic'
    },
    initial: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: 50,
        height: 50,
        backgroundColor: '#ddd',
        borderRadius: 50,
        paddingTop: 10,
        top: 115,
        left: 'calc(50% - 25px)'
    },
    checked: {
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        width: 15,
        height: 15,
        font: 'normal normal normal 14px/1 LooxIcons',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 50,
        paddingTop: 1,
        top: 150,
        left: 'calc(50% + 10px)'
    },
    name: {
        marginTop: 18
    },
    input: {
        height: 12,
    },
    inputLabel: {
        top: -4
    }
}))

const RenderCard = (props) => {
    const classes = useStyles();
    const { comment } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={comment.src}
                    title={comment.name}
                />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.initial}>
                        {comment.initial}
                    </Typography>
                    <Typography className={classes.checked}>
                        &radic;
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h6"
                        className={classes.name}>
                        {comment.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"
                        className={classes.comment}>
                        "{comment.comment}"
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}

const EmailSection = () => {
    const classes = useStyles();
    return (
        <Grid item container direction='column' alignItems='center' spacing={5}>
            <Grid item>
                <Typography variant='overline'>
                    FIND OUT FIRST. GET OUR EMAILS FOR NEW STORIES, FLOWERS, AND MORE.
            </Typography>
            </Grid>
            <Grid item container direction='row' spacing={3}>
                <Grid item md={8}>
                    <TextField 
                        label="Enter your email" 
                        variant="outlined"                        
                        color='secondary' 
                        fullWidth 
                        InputProps={{ classes: { input: classes.input }}}
                        InputLabelProps={{ classes: { root: classes.inputLabel } }}
                    />
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="secondary" disableElevation fullWidth>
                        SUBSCRIBE
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )

}

export const CommentSlide = () => {
    const classes = useStyles();
    const comments = [
        {
            id: 1,
            name: 'Murphy',
            initial: 'M',
            comment: `It's look so beautiful. My friend love it so much.`,
            src: 'https://images.loox.io/uploads/2021/3/30/NJJ8SAsNq.jpg',
            star: 4
        },
        {
            id: 2,
            name: 'Jessica C',
            initial: 'JC',
            comment: `It's my favorite color, adding a surprise to my mundane life`,
            src: 'https://images.loox.io/uploads/2021/3/30/411l6HrRiE9.jpg',
            star: 5
        },
        {
            id: 3,
            name: 'SA',
            initial: 'S',
            comment: `I really love this. Regardless of the color, the quanility are best.`,
            src: 'https://images.loox.io/uploads/2021/3/30/4J2aHrCj49.jpg',
            star: 5
        },
        {
            id: 4,
            name: 'Anil Suri',
            initial: 'AS',
            comment: `Without a story, you even don't know how to order it. LOL`,
            src: 'https://images.loox.io/uploads/2021/3/30/41xearSAiNq.jpg',
            star: 5
        },
        {
            id: 5,
            name: 'Rina',
            initial: 'R',
            comment: `These exceeded expectations! I'd recommend these to anyone. They are beautiful!`,
            src: 'https://images.loox.io/uploads/2021/3/30/Vya6BHCiE9.jpg',
            star: 4
        },
        {
            id: 6,
            name: 'Sara Landau',
            initial: 'SL',
            comment: `It's completely different from what I imagined. Very satisfied.`,
            src: 'https://images.loox.io/uploads/2021/3/30/EkbCBHCi45.jpg',
            star: 5
        },
        {
            id: 7,
            name: 'Karina Bapniah',
            initial: 'KB',
            comment: `Super satisfied`,
            src: 'https://images.loox.io/uploads/2021/3/30/4JRrSAjN5.jpg',
            star: 4
        },
        {
            id: 8,
            name: 'Peter',
            initial: 'P',
            comment: `After receiving the flowers, my girlfriend love it so much, will buy more.`,
            src: 'https://images.loox.io/uploads/2021/3/30/4Jg18rAjVc.jpg',
            star: 5
        },
        {
            id: 9,
            name: 'Renee Goretsky',
            initial: 'RG',
            comment: `Thank you very much for making such a beautiful bouquet`,
            src: 'https://images.loox.io/uploads/2021/3/30/VylABBCoEq.jpg',
            star: 5
        },
        {
            id: 10,
            name: 'Ariane',
            initial: 'A',
            comment: `They are absolutely beautiful and look absolutely beautiful in the house. The actual flowers are ...`,
            src: 'https://images.loox.io/uploads/2021/3/30/N1AprBCjE5.jpg',
            star: 4
        },
    ]
    return (
        <Grid container justify='center' alignItems='flex-start' className={classes.root}>
            <Grid item md={10}>
                <Carousel
                    centerMode
                    centerSlidePercentage={20}
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
                    className={classes.carousel}
                >
                    {comments.map((comment) =>
                        <RenderCard comment={comment} key={comment.id} />
                    )}
                </Carousel>
            </Grid>
            <Grid item container md={6} className={classes.root}>
                <EmailSection></EmailSection>
            </Grid>
        </Grid>
    )
}