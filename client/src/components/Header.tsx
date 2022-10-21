import React from 'react';

const Header = () => (
    <header className="Header" >

        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">
                            This is a servic copying the advertisements of apartments from Sreality.
                        </p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li><a href='https://www.sreality.cz/' className="text-white">Official Sreality</a></li>
                            <li><a href="https://github.com/nehalch/flats_overview" className="text-white">Star on Github</a></li>
                            <li><a href="mailto:rtpdfv@yahoo.com" className="text-white">Email me</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a href="hpps://localhost:8080" className="navbar-brand d-flex align-items-center">
                    <img src={process.env.PUBLIC_URL + "/favicon.svg"} width="20" height="20" alt='logo' />
                    <strong>Flats</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>

    </header >
);

export default Header;



