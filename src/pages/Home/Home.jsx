import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow">
                <Link className="navbar-brand" to="#">Track that Job</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse " id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto d-flex">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">login</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <main role="main">
                <div className="jumbotron custom-jumbotron d-flex justify-content-evenly align-items-center ">
                    <div className="container">
                        <h1 className="display-3 text-center">Welcome to Track that Job!</h1>
                        <p className="text-center">Track that Job offers an easy way to keep track of your jobs applications while searching for a job</p>
                        <p className="text-center"><Link className="btn btn-primary btn-lg" to="/register" role="button">Register »</Link></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
