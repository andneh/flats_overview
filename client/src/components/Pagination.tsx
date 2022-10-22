import React, { CSSProperties } from 'react';
import { Pagination as Pagination_element } from 'react-bootstrap';

const Pagination = (props: any) => {
    console.log(props.page);
    let pages = [];
    for (let number = 1; number !== 10; number++) {
        pages.push(
            <li className={"page-item" + ((number === (props.page)) ? " active" : '')}>
                <button className="page-link" onClick={() => { props.chPage(number); window.scroll({ top: 0, left: 0 }); console.log(`Number page ${number} Page ${props.page}`) }}>
                    {number}
                </button>
            </li >
        );
    }

    const style: CSSProperties = { margin: 'auto', display: 'flex' };

    return (
        <div className='py-5 bg-light text-xs-center text-center' >
            <div className='container text-xs-center text-center' style={style}>
                <Pagination_element style={style}>
                    {pages}
                </Pagination_element>
            </div>
        </div >
    );
}


export default Pagination;