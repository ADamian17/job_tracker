import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../../redux/user/user.actions';

import './Sidebar.scss';

const SIDEBAR_ROUTES = [
    {
        name: 'jobs',
        url: '/dashboard/jobs',
        icon: 'sidebar__nav__icon  fas fa-suitcase'
    },
    {
        name: 'reports',
        url: '/dashboard/reports',
        icon: 'sidebar__nav__icon fas fa-chart-line'
    },
    {
        name: 'account',
        url: '/dashboard/profile',
        icon: 'sidebar__nav__icon  fas fa-sliders-h'
    },
    {
        name: 'logout',
        url: '#',
        icon: 'sidebar__nav__icon fas fa-sign-out-alt'
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
           
            <div key={idx} className="sidebar__nav__item" onClick={route.logout}>
                <Link  to={route.url} >
                    <i className={route.icon} /> 
                    <p className="sidebar__nav__text">{route.name}</p>
                </Link>
            </div> 
        );
    }); 

    return (
        <aside className="col-2 p-4 sidebar">
            <h3 className="sidebar__header text-center mb-3">Track that job</h3>

            {/* NOTE sidebar */}
            {links}
        </aside>
    ); 
    
};
                    

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Sidebar);
