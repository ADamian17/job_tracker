import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <Link className="dropdown-item" to="#">Action</Link>
                                <Link className="dropdown-item" to="#">Another action</Link>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Hello, world!</h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                        <p><Link className="btn btn-primary btn-lg" to="#" role="button">Learn more »</Link></p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
                        </div>
                    </div>

                    <hr/>

                </div> 
            </main>
            <footer className="container">
                <p>© Company 2017-2020</p>
            </footer>
        </div>
    );
};

export default Home;
