import React, { useEffect } from 'react';
import Grid from './Grid';
import Pagination from './Pagination';

const Main = () => {
    const [flats, loadFlats] = React.useState([]);
    const [page, chPage] = React.useState(1); // 0-0,1-50,

    // const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        fetch("http://localhost:8080/api/")
            .then((res) => res.json())
            .then((flats) => {
                loadFlats(flats);
                // setLoading(false);
            });
    }, []);

    return (
        <main className="Main" >
            <Grid {...{ flats, page }} />
            <Pagination {...{ page, chPage }} />
        </main>


    )
};
export default Main;