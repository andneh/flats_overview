import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { flat } from '../types/flat';
import "../styles/FlatsList.css";

const Photos = (images: string[]) => {
    const photos: any = [];
    if (images.length !== 0) {
        for (let i = 0; i !== 3; i++) {
            photos.push(
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={images[i]}
                        alt="First slide"
                    />
                </Carousel.Item>
            );
        }
    } else {
        photos.push(
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/no_photo.jpeg"}
                    alt="First slide"
                />
            </Carousel.Item>
        );
    }



    return (
        <Carousel variant="dark">
            {photos}
        </Carousel>
    );
}

export default Photos;