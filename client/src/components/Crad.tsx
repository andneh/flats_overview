import React from 'react';
import "../styles/Card.css";
import { falt } from '../types/flat';

const Card = (flat: falt) => (
    <div className="Card" >
        <h1>{flat.title}</h1>
        <img src={flat.image1} alt="123" />
        <img src={flat.image2} alt="123" />
        <img src={flat.image3} alt="123" />
    </div>
);

export default Card;