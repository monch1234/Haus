import Carousel from 'react-bootstrap/Carousel';
import './index.css'

import slider1 from '../images/slider1.png'

function DarkVariantExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption className="Carusel">
                    <h1>Истина в качестве</h1>
                    <p>
                        КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
                        КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
                        ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
                    </p>
                    <button>Купить</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Second slide"
                />
                <Carousel.Caption className="Carusel">
                    <h1>Истина в качестве</h1>
                    <p>
                        КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
                        КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
                        ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
                    </p>
                    <button>Купить</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Third slide"
                />
                <Carousel.Caption className="Carusel">
                    <h1>Истина в качестве</h1>
                    <p>
                        КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
                        КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
                        ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
                    </p>
                    <button>Купить</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;