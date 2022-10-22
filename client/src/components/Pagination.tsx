import React from 'react';

const Pagination = (props: any) => {
    let pages = [];

    for (let number = 1; number !== 10; number++) {
        pages.push(
            <li className={"page-item" + ((number === (props.page)) ? " active" : '')}>
                <button className="page-link" onClick={() => { props.chPage(number); console.log(`N ${number} P ${props.page}`) }}>{number}</button>
            </li>
        );

    }
    console.log(props.page);
    return (
        <div>
            <ul className="pagination">
                {pages}
            </ul>
        </div >
    );
}

export default Pagination;
// 0 50 100 150
// 0 1  2   3