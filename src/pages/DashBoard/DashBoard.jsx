import React from 'react';

import Routes from './routes/routes';
import SideBar from '../../components/UI/Sidebar/Sidebar';
// import Divider from '../../components/UI/Divider/Divider';
// import TopNavbar from '../../components/UI/topNavBar/topNavBAr';
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import DashHeader from '../../components/UI/DashHeader/DashHeader';

import './DashBoard.scss';

const DashBoard = ( { history, match } ) => {

    return (
        <section className="dashboard">
        
            <div className="onlyDesktop">
                <p>sorry mobile version is not currently availible, come back to desktop</p> 
            </div>

            <div className="dashboard__container">
                <SideBar history={ history } />

                <main className="dashboard__main">
                    <DashHeader match={ match }/>

                    {/* NOTE dashboard routes */}
                    <Routes history={ history } match={ match } /> 
                </main>
            </div>

        </section>
    );
};

export default DashBoard;


{/* <div className="row">


<div className="col main-content">

    <div className="container">

        <div className="row">
            <div className="col">
                
            </div>
        </div>

    </div>

</div>
</div> */}


//  <div className="row">
//     <div className="col">
//         
//     </div>
// </div>
