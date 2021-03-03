import React from 'react';

import './CenteredContainer.scss';

const Container = ( { children } ) => {
    return (
        <section className="container">

            <div  className="container__card">
                {children}
            </div>

        </section>
    );

};

export default Container;
