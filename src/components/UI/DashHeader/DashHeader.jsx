import React from 'react';
import { useLocation } from 'react-router-dom';

import NewJob from '../../../containers/JobsContainer/NewJob/NewJob';
import PlusIcon from '../Icons/PlusIcon/PlusIcon';

import './DashHeader.scss';


const DashBoardHeader = (props) => {

    let location = useLocation();

    const getTitle = () => {

        const title = location.pathname.split('/').filter((hash) => hash !== '' && hash !== 'dashboard');

        if (title.length > 2) {
            title.pop();
        }

        let re = /,/gi;

        return title.join().replace(re, ' ');
    };

    return (
        <>
            <div className="dashboard__main__header">

                <h1 className="dashboard__main__header__title" >
                    {getTitle()}
                </h1>

                <button className="btn btn-primary center-Items" onClick={props.showModal}>
                    <PlusIcon />
                    <span>Add Job</span>
                </button>

            </div>

            <Modal>
                <NewJob />
            </Modal>
        </>
    );
};

export default DashBoardHeader;
