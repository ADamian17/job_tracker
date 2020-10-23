import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/routes';
import SideBar from '../../components/UI/Sidebar/Sidebar';
// import Divider from '../../components/UI/Divider/Divider';
// import TopNavbar from '../../components/UI/topNavBar/topNavBAr';
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import DashHeader from '../../components/UI/DashHeader/DashHeader';

import './DashBoard.scss';

const DashBoard = ( { history, match } ) => {

    return (
        <Router>
            <div className="container-fluid">
    
                <div className="onlyDesktop">
                    <p>sorry mobile version is not currently availible, come back to desktop</p> 
                </div>

                <div className="row">

                    <div className="col-2 p-0" style={{ backgroundColor: 'red'}}>
                        {/* NOTE sidebar */}
                        <SideBar history={ history } />
                    </div>

                    <div className="col main-content">

                        <div className="container">

                            <div className="row">
                                <div className="col">
                                    < DashHeader match={ match }/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    {/* NOTE dashboard routes */}
                                    <Routes history={ history } match={ match } /> 
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* NOTE main content */}
                {/* <main className="dashboard__main-content">
                    <div className="wrapper" >
                        

                        <Divider />

                        
                    </div>
                </main> */}

            </div>
            
        </Router>
    );
};

export default DashBoard;
