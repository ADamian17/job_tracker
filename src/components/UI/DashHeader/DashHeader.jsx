import React from 'react';
import { useLocation } from 'react-router-dom';

// import './DashHeader.scss';


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

    console.log(getTitle());

    return (
        <div className="header">
            <h1>{ getTitle() }</h1>
        </div>
    );
};

export default DashBoardHeader;
