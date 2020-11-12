import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import DashBoard from '../pages/DashBoard/DashBoard';
import NotFound from '../pages/404/404';

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect( mapStateToProps )( withRouter( ({ history, currentUser }) => {

    const PrivateRoute = ({ Component, ...rest }) => {
        return <Route 
            {...rest} 
            render={ ( props ) => (
                currentUser ? ( 
                    <Component {...props} />
                ) : ( 
                    <Redirect to="/login" />
                )
            )} />;
    };

    return (
        <Switch>
            <Route 
                exact 
                path="/" 
                component={Home} />

            <Route 
                path="/register" 
                component={Register} />

            <Route
                path="/login"
                render={() => (
                    <Login 
                        history={history} />
                )}/>

            <PrivateRoute path="/dashboard" Component={DashBoard} /> 
            
            <Route path="*">
                <NotFound />
            </Route>
            
        </Switch>
    );
}));
