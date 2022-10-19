import React, { useEffect } from 'react';

import Card from './Crad';
import Loader from './Loader';
import { falt } from '../types/flat';
// import flats from '../modules/api';

// const Cards = 
const Main = () => {
    const [flats, loadFlats] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/")
            .then((res) => res.json())
            .then((flats) => {
                console.log(flats);
                loadFlats(flats);
                setLoading(false);
            });
    }, []);

    return (
        <main className="Main" >
            {/* {loading && <Loader />} */}

            {flats.length ? (flats.map((flat: falt) => (<Card {...flat} />))) : loading ? null : (<p>No todos.</p>)}

        </main>
    )
};

export default Main;