import React, { useEffect } from 'react';
import Pagination from './Pagination';
// import FlatCard from './FlatCard';
// import { flat } from '../types/flat';
import Grid from './Grid';

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
    // console.log(page);
    // chPage(0);
    // console.log(page);
    return (
        <main className="Main" >
            <div className='album py-5 bg-light'>
                <Grid {...{ flats, page, chPage }} />
            </div>
        </main>

    )
};
export default Main;