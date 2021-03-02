import React from 'react';

import './Container.scss';

const LoginRegisterContainer = ( { children } ) => {
    return (
        <section className="container">

            <div  className="container__card">
                {children}
            </div>

        </section>
    );

};

export default LoginRegisterContainer;
