import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../themes/theme';


const useStyles = makeStyles((theme) => ({   
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}))

export const HomeCarousel = (props) => {
    const classes = useStyles();
    const slides = [
        { image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1112_1000x.png?v=1616618855' },
        { image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/Bespoke_Flower_Arrangement_1400x.jpg?v=1614737923' },
        { image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/1112_1000x.png?v=1616618855' },
        { image: 'https://cdn.shopify.com/s/files/1/0519/0542/9670/files/Bespoke_Flower_Arrangement_1400x.jpg?v=1614737923' }
    ];
    return (
            <Slider autoplay={3000}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{height: props.height}}
                    >
                        <img src={slide.image} className={classes.img} alt='img' />
                    </div>
                ))}
            </Slider>
    )
}