import React from 'react';
import Card from 'react-bootstrap/Card';
import Photos from './Photos';
import { flat } from '../types/flat';
import "../styles/Card.css";


const FlatCard = (flat: flat) => (
    <div>
        <Card style={{ width: '18rem' }}>
            <Photos {...flat} />
            <Card.Body>
                <Card.Title>{flat.title}</Card.Title>
            </Card.Body>
        </Card>
    </div>
);


export default FlatCard;
