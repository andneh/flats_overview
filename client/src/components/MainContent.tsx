import React, { useEffect } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Flat_Card from './Flat_Card';
import Loader from './Loader';
import { flat } from '../types/flat';

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

    let i = 0;

    return (
        <main className="Main" >
            <div className="Flats">
                {flats.length ? (flats.map((flat: flat) => {
                    if (i < 2) {
                        i += 1;
                        return (<Flat_Card {...flat} />);
                    }
                    return;
                })) : (<p>No flats.</p>)}
            </div>

        </main>
    )
};

export default Main;