import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../../redux/user/user.actions';

import './Sidebar.scss';

const SIDEBAR_ROUTES = [
    {
        name: 'jobs',
        url: '/dashboard/jobs',
        icon: 'fas fa-suitcase'
    },
    {
        name: 'reports',
        url: '/dashboard/reports',
        icon: 'fas fa-chart-line'
    },
    {
        name: 'account',
        url: '/dashboard/profile',
        icon: 'fas fa-sliders-h'
    },
    {
        name: 'logout',
        url: '#',
        icon: 'fas fa-sign-out-alt'
    }
];

const Sidebar = ( props ) => {

    const handleLogout = () => {
        const { logout, history } = props;
        logout();
        history.push('/login');
    };

    const links = SIDEBAR_ROUTES.map( (route, idx) =>  {

        if( route.name === 'logout') {
            route['logout'] = handleLogout;
        }

        return (
            <li key={idx} className="sidebar__menu--item nav-item" >
                <div className="sidebar__menu--link" onClick={route.logout}> 
                    <i className={route.icon} /> 
                    <Link to={route.url}>{route.name}</Link>
                </div>
            </li>
        );
    }); 

    return (
        <nav className="sidebar">
    
            <div className="sidebar__header ">
                <p>Track that job</p>
            </div>
                
            <ul className="sidebar__menu nav flex-column ">
    
                { links }
    
            </ul>
    
        </nav>
    );

 
};
                    

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Sidebar);
