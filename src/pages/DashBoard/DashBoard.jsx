import React from 'react';

import Routes from './routes/routes';
import SideBar from '../../components/UI/Sidebar/Sidebar';
import DashHeader from '../../components/UI/DashHeader/DashHeader';

import './DashBoard.scss';

const DashBoard = ( { history, match } ) => {

    return (
        <section className="dashboard">

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
