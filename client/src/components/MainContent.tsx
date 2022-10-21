import React, { useEffect } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from './Crad';
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
            {loading && (
                <>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as="p" animation="wave">
                        <Placeholder xs={12} />
                    </Placeholder>
                </>
            )}
            <div className="Flats">
                {flats.length ? (flats.map((flat: flat) => {
                    if (i < 2) {
                        i += 1;
                        return (<Card {...flat} />);
                    }
                })) : loading ? null : (<p>No flats.</p>)}
            </div>

        </main>
    )
};

export default Main;