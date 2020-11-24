import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div id="home">
            <h1 className="home_title">Home</h1>
            <button type="button" className="btn btn-primary m-2">Primary</button>
            <button type="button" className="btn btn-secondary mr-2">Secondary</button>
            <button type="button" className="btn btn-success mr-2">Success</button>
            <button type="button" className="btn btn-danger mr-2">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
        </div>
    );
};

export default Home;
