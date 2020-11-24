import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../../redux/user/user.actions';

import './Sidebar.scss';

const SIDEBAR_ROUTES = [
    {
        name: 'jobs',
        url: '/dashboard/jobs',
        icon: 'sidebar__nav__icon  fas fa-suitcase',
        active: true
    },
    {
        name: 'reports',
        url: '/dashboard/reports',
        icon: 'sidebar__nav__icon fas fa-chart-line',
        active: false
    },
    {
        name: 'profile',
        url: '/dashboard/profile',
        icon: 'sidebar__nav__icon  fas fa-sliders-h',
        active: false
    },
    {
        name: 'logout',
        url: '#',
        icon: 'sidebar__nav__icon fas fa-sign-out-alt',
        active: false
    }
];

const Sidebar = ( props ) => {
    
    const location = props.history.location.pathname.split('/');

    const handleLogout = () => {
        const { logout, history } = props;
        logout();
        history.push('/login');
    };

    const links = SIDEBAR_ROUTES.map( (route, idx) =>  {

        if( route.name === 'logout') {
            route['logout'] = () => handleLogout();
        }

        if (location[2] === route.name ) {
            route.active = true;
        } else {
            route.active = false;
        }
    
        return (
            <Link 
                key={idx} 
                to={route.url} 
                onClick={route.logout}
                className={`sidebar__nav__item  ${ route.active === true ? 'active' : '' }`}>
                <i className={route.icon} /> 
                <p className="sidebar__nav__text">{route.name}</p>
            </Link>
        );
    }); 

    return (
        <aside className="col-2 sidebar">
            <section>
                <h3 className="sidebar__header text-center mb-3">Track that job</h3>
            </section>
            <section>
                {/* NOTE sidebar */}
                {links}
            </section> 
        </aside>
    ); 
    
};
                    

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Sidebar);
