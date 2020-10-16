import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/routes';
import SideBar from '../../components/UI/Sidebar/Sidebar';
import Divider from '../../components/UI/Divider/Divider';
// import TopNavbar from '../../components/UI/topNavBar/topNavBAr';
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import DashHeader from '../../components/UI/DashHeader/DashHeader';

// import './DashBoard.scss';


const DashBoard = ( { history, match } ) => {
    return (
        <Router>
            <div className="dashboard">

                {/* NOTE sidebar */}
                <div className="dashboard__sidebar">
                    <SideBar history={ history } />
                </div>

                {/* NOTE main content */}
                <main className="dashboard__main-content">
                    <div className="wrapper" >
                        <div className="dashHeader">
                            < DashHeader match={ match }/> 
                        </div>

                        <Divider />

                        {/* NOTE dashboard routes */}
                        <Routes history={ history } match={ match } />
                    </div>
                </main>

            </div>
            
        </Router>
    );
};

export default DashBoard;
