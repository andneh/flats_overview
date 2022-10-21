import React from 'react';
import FlatCard from './FlatCard';
import { flat } from '../types/flat';


const CardsConteiner = (flats: any, loading: boolean) => {
    console.log(loading);
    console.log("flats IN CONT");
    console.log(flats);
    console.log(flats.length);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    flats.map((flat: flat) => (
                        <div className="col">
                            <FlatCard {...flat} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default CardsConteiner;

