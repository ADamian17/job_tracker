import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Routes from './routes/routes';
// import SideBar from '../../components/UI/Sidebar/Sidebar';
// import TopNavbar from '../../components/UI/topNavBar/topNavBAr';
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
// import DashHeader from '../../components/DashBoardHeader/DashBoardHeader';

import './DashBoard.scss';

const DashBoard = ( { history, match } ) => {
    return (
        <Router>

            <div className="dashboard">

                <div className="dashboard__sidebar">
                    sidebar
                </div>

                <div className="dashboard__main-content">
                    content
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
