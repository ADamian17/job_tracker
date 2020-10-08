import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Routes from './routes/routes';
// import SideBar from '../../components/UI/Sidebar/Sidebar';
// import TopNavbar from '../../components/UI/topNavBar/topNavBAr';
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
// import DashHeader from '../../components/DashBoardHeader/DashBoardHeader';

import './DashBoard.scss';

// eslint-disable-next-line no-unused-vars
const DashBoard = ( { history, match } ) => {
    return (
        <Router>
            {/* <div className="wrapper">
                <div className="aside">
                    sidebar
                </div>
                <div className="main">
                    <p>content.</p>  
                </div>
            </div> */}

            <div className="dashboard">

                <div className="dashboard__sidebar">
                    {/* <SideBar history={ history } /> */}
                </div>

                <div className="dashboard__main-content">
                    {/* <Routes history={ history } match={ match } /> */}
                </div>

                {/* <div className="dashboard__sidebar">
                    NOTE sidebar container
                    <SideBar history={ history } />
                </div>

                <main className="dashboard__main">

                    <div className="wrapper" >
                        <div className="dashHeader">
                            < DashHeader match={ match }/> 
                        </div>

                        NOTE dashboard routes
                        <Routes history={ history } match={ match } />
                    </div>

                </main> */}

            </div>
            
        </Router>
    );
};

export default DashBoard;
