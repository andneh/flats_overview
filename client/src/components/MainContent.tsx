import React, { useEffect } from 'react';
import CardsConteiner from './CardsConteiner';

const Main = () => {
    const [flats, loadFlats] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/")
            .then((res) => res.json())
            .then((flats) => {
                loadFlats(flats);
                setLoading(false);
            });
    }, []);
    return (
        <main className="Main" >
            <CardsConteiner loading={loading} {...flats} />
        </main>
    )
};

export default Main;