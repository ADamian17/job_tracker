import React from 'react';
import { Link } from 'react-router-dom';

import TopNavbar from '../../components/UI/TopNavbar/TopNavbar';

import './Home.scss';

const Home = () => {
    return (
        <>
            {/* <TopNavbar /> */}
            <main className="landing">

                {/* call to action */}

                <div className="landing__cta">

                    <h2 className="landing__secondary__heading">Welcome to</h2>
                    <h1 className="landing__heading">Track that Job!</h1>

                    <p className="landing__text">Track that Job offers an easy way to keep track of your jobs applications while searching for a job</p>

                    <section className="landing__links"> 
                        <button className="btn btn-primary landing__item">
                            <Link className="landing__link" to="/register" role="button">Register »</Link>
                        </button>

                        <span>or</span>

                        <button className="btn btn-primary landing__item">
                            <Link className="landing__link" to="/login" role="button">login »</Link>
                        </button>
                    </section>
                </div>


            </main>
        </>
        
       
    );
};

export default Home;
