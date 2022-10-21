import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { flat } from '../types/flat';
import "../styles/FlatsList.css";

const Photos = (flat: flat) => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={flat.image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={flat.image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={flat.image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Photos;