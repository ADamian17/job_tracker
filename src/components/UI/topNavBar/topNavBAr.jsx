import React from 'react';
import { Link } from 'react-router-dom';

import './topNavbar.scss';

const TopNavbar = () => {
    return (
        <nav className="navbar">
            <Link className="navba__brand" to="/">Track that Job</Link>

            <ul className="navbar__nav">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/register">Register</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar__link" to="/login">login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default TopNavbar;
