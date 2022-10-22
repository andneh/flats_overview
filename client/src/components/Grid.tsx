import React from 'react'
import FlatCard from './FlatCard';
import { flat } from '../types/flat';


const Grid = (props: any) => {
    const [from, to] = [((props.page - 1) * 50), ((props.page - 1) * 50 + 49)];
    console.log(`from ${from}  to ${to}`)
    const Cards: any[] = []
    for (let i = from; i !== to; i++) {
        const flat: flat = props.flats[i];
        Cards.push(
            <div className="col">
                <FlatCard {...flat} />
            </div>
        );
    }

    return (
        <div className='album py-5 bg-light '>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {Cards}
                </div>
            </div>
        </div>
    );
}


export default Grid;