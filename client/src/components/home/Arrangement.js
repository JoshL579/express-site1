import { Typography, Grid, Divider, Button } from '@material-ui/core';
import { theme } from '../../themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        padding: 80
    },
    brandName: {
        marginBottom: 20
    },
    intro: {
        marginTop: 30
    },
    container2: {
        marginTop: 50
    },
    storyHeader: {
        textAlign: 'center',
        margin: '50px 0',
        color: '#ff8000'
    },
    storyTitle: {
        borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)'
    },
    storyDecription: {
        maxWidth: 340
    },
    bottomDescription: {
        marginTop: 80,
        maxWidth: 800
    },
    intro2: {
        margin: '30px 0'
    },
    bottomBtn: {
        marginTop: 50
    },
    link: {
        color: theme.palette.secondary.main
    }
}))

const StoryTemp = (props) => {
    const classes = useStyles();
    const { story, id } = props;
    return (
        <>
            <Grid item className={classes.storyHeader}>
                <Typography variant='h6' className={classes.storyTitle}>
                    {story.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {story.name}
                </Typography>
            </Grid>
            <Grid item container direction={(id % 2 == 0) ? "row-reverse" : "row"}
                justify='center' alignItems='center' spacing={4}
            >
                <Grid item>
                    <Typography variant='subtitle2' className={classes.storyDecription}>
                        {story.decription}
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={story.src} alt="" />
                </Grid>
            </Grid>
        </>
    )
}

export const Arrangement = () => {
    const classes = useStyles();
    const stories = [
        {
            title: 'FIRST STORY',
            name: '# She and He',
            decription: '"We both like green, but she is as beautiful as a pink flower. I hope she can receive it soon."',
            src: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/2_e02791ae-0acd-49e0-a112-868b054a0165_480x480.jpg'
        },
        {
            title: 'SECOND STORY',
            name: '# Flower in the dream',
            decription: '"I want to buy a bouquet of flowers for my girlfriend. Last night, she dreamt that a Van Gogh <The Old Mill>, was yellow, with wheat field and mills. It was beautiful. I want to give her a present, but now I want to turn this into a flower."',
            src: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1_7352bc6f-9a24-4b87-b6cc-4698fa9e6aed_480x480.jpg'
        },
        {
            title: 'THIRD STORY',
            name: '# Brave Princess',
            decription: `"Black flowers for the princess who is about to become a bride. She is a lovely girl who loves to smile, and a brave goddess who cut through difficulties. May she hold the prince's hand and still keep her own uniqueness."`,
            src: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/3105a9b267af797781eaf7ac60bf49b4_36a3629f-1127-41df-83de-0de823cf8978_480x480.jpg'
        }
    ]
    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item container justify='center' spacing={10}>
                <Grid item md={5}>
                    <img src="https://cdn.shopify.com/s/files/1/0519/0542/9670/products/2_400x.jpg" alt="" />
                </Grid>
                <Grid item md={5}>
                    <Typography variant='overline' component='p' className={classes.brandName}>
                        MS LULU DIARY
                    </Typography>
                    <Typography variant='h6'>
                        BESPOKE FLOWER ARRANGEMENT
                    </Typography>
                    <Typography variant='h6'>
                        $150
                    </Typography>
                    <Divider />
                    <Typography variant='body2' className={classes.intro}>
                        We are a group of people who love life.
                        <br />We believe that every flower has its own story.
                        <br />Tell your story or tell us who you want to give them to.
                        <br />We will create a special bouquet of flowers for you.
                    </Typography>
                    <Typography variant='subtitle2' className={classes.intro}>
                        "Every flower should not be disappointed
                        <br />Every story will be respected and cherished
                        <br />A bouquet of stories
                        <br />Waiting for revealing surprise and happiness"
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container justify='center' alignItems='center'
                spacing={4} direction='row-reverse'
                className={classes.container2}
            >
                <Grid item md={5}>
                    <img src="https://cdn.shopify.com/s/files/1/0519/0542/9670/files/4_480x480.jpg" alt="" />
                </Grid>
                <Grid item md={5}>
                    <Typography variant='subtitle2' className={classes.intro}>
                        # We accept the order from Vancouver
                    </Typography>
                    <Typography variant='body2'>
                        At Present, we only accept bespoke arrangement order from
                    <br />Vancouver. In the future, we will order flowers in more places.
                    </Typography>
                    <Typography variant='subtitle2' className={classes.intro}>
                        "The deepest story in your heart
                        <br />We send love with flowers for you."
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction='column' alignItems='center'>
                {stories.map((story, index) =>
                    <StoryTemp story={story} key={index} id={index} />
                )}
            </Grid>
            <Grid item className={classes.bottomDescription}>
                <Typography variant='subtitle2'>
                    # After reading other people's stories, do you
                    have any stories want to share with us?
                </Typography>
                <Typography variant='body2' className={classes.intro2}>
                    Tell us your story in the blank box, we will create a
                    bouquet of flowers only for your story.
                    Please write down your story, indicating your favorite
                    colors. (blue-white, white-green, pink-white, pink-blue,
                    red, etc.)  If there is no special description, we will
                    create it according to your story.
                </Typography>
                <Typography variant='subtitle2'>
                    Booking flowers according to different flowers
                    and materials, please make a reservation at
                    1-2 weeks in advance.
                </Typography>
                <Grid container direction="row-reverse" 
                    alignItems='flex-end' justify='flex-start'
                    spacing={5}
                >
                    <Grid item>
                        <Button
                            variant="contained" color="secondary" disableElevation
                            className={classes.bottomBtn}
                        >
                            ADD TO CART
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link to='#' className={classes.link}>
                            View product details
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}