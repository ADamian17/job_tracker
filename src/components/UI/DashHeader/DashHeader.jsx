import React from 'react';
import { useLocation } from 'react-router-dom';

import './DashHeader.scss';


const DashBoardHeader = () => {
    
    let location = useLocation();

    const getTitle = () => {

        const title = location.pathname.split('/').filter( ( hash ) => hash !== '' && hash !== 'dashboard' );

        if ( title.length > 2 ) {
            title.pop();    
        }
        
        let re = /,/gi;

        return title.join().replace(re, ' ');  
    };

    return (
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="header" >{ getTitle() }</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Add Job</button>
                </div>
            </div>
        </div>
    );
};

export default DashBoardHeader;
