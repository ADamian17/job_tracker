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
    // {
    //     name: 'reports',
    //     url: '/dashboard/reports',
    //     icon: 'sidebar__nav__icon fas fa-chart-line',
    //     active: false
    // },
    {
        name: 'profile',
        url: '/dashboard/profile',
        icon: 'sidebar__nav__icon  fas fa-user',
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

    console.log('adonis');

    const links = SIDEBAR_ROUTES.map( (route, idx) =>  {

        if( route.name === 'logout') {
            route.logout = () => handleLogout();
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
                <div className="sidebar__nav__text">
                    <i className={route.icon} /> 
                    <span>{route.name}</span>
                </div>
            </Link>
        );
    }); 

    return (
        <aside className="col-2 sidebar">
            <section className="sidebar__header p-4">
                <h2 className=" text-center">Track that job</h2>
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
