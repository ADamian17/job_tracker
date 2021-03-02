import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    return (
        <>
            {/* <TopNavbar /> */}
            <main className="landing">

                {/* <div className="mountian__a">
                    1
                </div> */}
                {/* <div className="mountian__b">
                    2
                </div> */}

                {/* call to action */}

                <div className="landing__cta">

                    <h1 className="landing__heading">Track that Job!</h1>

                    <p className="landing__text">An easy way to keep track of your job applications while searching </p>

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
