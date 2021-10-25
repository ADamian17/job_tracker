import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../../redux/user/user.actions';

/* Icons */
import Briefcase from './Icons/Briefcase/Briefcase';
import Exit from './Icons/Exit/Exit';
import User from './Icons/User/User';


import './Sidebar.scss';

const SIDEBAR_ROUTES = [
    {
        name: 'jobs',
        url: '/dashboard/jobs',
        icon: <Briefcase />,
        active: true
    },
    {
        name: 'profile',
        url: '/dashboard/profile',
        icon: <User />,
        active: false
    },
    {
        name: 'logout',
        url: '#',
        icon: <Exit />,
        active: false
    }
];

const Sidebar = (props) => {

    const location = props.history.location.pathname.split('/');

    const handleLogout = () => {
        const { logout, history } = props;
        logout();
        history.push('/login');
    };

    const links = SIDEBAR_ROUTES.map((route, idx) => {

        if (route.name === 'logout') {
            route.logout = () => handleLogout();
        }

        if (location[2] === route.name) {
            route.active = true;
        } else {
            route.active = false;
        }

        return (
            <li
                key={idx}
                className={`sidebar__nav__item  ${route.active === true ? 'sidebar__nav__item--active' : ''}`}>

                <Link
                    to={route.url}
                    onClick={route.logout}
                    className="sidebar__nav__link">
                    {route.icon}
                    <span>{route.name}</span>
                </Link>

            </li>
        );
    });

    {/* NOTE sidebar */ }
    return (
        <nav className="sidebar">

            <section className="sidebar__header">
                <h2>Track that job</h2>
            </section>

            <ul className="sidebar__nav">
                {links}
            </ul>

        </nav>
    );

};


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Sidebar);
