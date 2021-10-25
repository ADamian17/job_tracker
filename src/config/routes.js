import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import DashBoard from '../pages/Dashboard';
import NotFound from '../pages/404/404';
import Ui from '../pages/Ui';

const Routes = ({ history  }) => {
  const currentUser = useSelector(({ user }) => user.currentUser);
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
        path="/ui" 
        component={Ui} />

      <Route
        path="/login"
        render={() => (
            <Login 
                history={history} />
      )}/>

      <PrivateRoute 
        path="/dashboard" 
        Component={DashBoard} /> 
        
      <Route path="*">
          <NotFound />
      </Route>  
    </Switch>
  );
};

export default Routes;
