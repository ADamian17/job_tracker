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


// <>
//     <div className="col-3 city-sidebar bg-light p-4 mr-3">
//         <h3 className="city-header">cities</h3>
//         <div className="card mb-3 p-2 shadow-sm city-sidebar-cards rounded-lg">
//             <div className="row no-gutters">

//                 <div className="col-md-4">
//                     <img src="{{ city.image }}" className="card-img" alt="..." />
//                 </div>

//                 <div className="col-md-8">
//                     <div id="{{ city.id }}" className="card-body">
//                         <h5 className="card-title">
//                             <a id="{{ city.id }}" className="city-link" href="{% url 'cities' city.id %}" />
//                         </h5>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     </div>  
// </>
