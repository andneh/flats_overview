import React from 'react';
import Card from 'react-bootstrap/Card';
import Protos from './Photos';
import { flat } from '../types/flat';
import "../styles/Card.css";


const Card = (flat: flat) => (
    <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Photos {...flat} />
        <Card.Body>
            <Card.Title>{falt.title}</Card.Title>
        </Card.Body>
    </Card>
);


export default Card;
