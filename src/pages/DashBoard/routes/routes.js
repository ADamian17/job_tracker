import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Jobs from '../../../containers/JobsContainer/JobsContainer';
import JobDetails from '../../../containers/JobsContainer/JobDetails/JobDetails';
// import Form from '../../../components/Form/Form';
// import Profile from '../../../containers/ProfileContainer/ProfileContainer';
// import EditProfile from '../../../containers/ProfileContainer/ProfileEdit/ProfileEdit';
// import Reports from '../../../containers/ReportContainer/ReportContainer';
// import NotFound from '../../404/404';

// coupoling
const routes = [
    {
        path: '/dashboard/jobs',
        component: () => <Jobs />,
        exact: true
    },
    {
        path: '/dashboard/jobs/details/:id',
        component: () => <JobDetails />
    }
    // {
    //     path: '/dashboard/jobs/edit/:id',
    //     component: () => <Form />
    // },
    // {
    //     path: '/dashboard/profile',
    //     component: () => <Profile />,
    //     exact: true
    // },
    // {
    //     path: '/dashboard/profile/edit',
    //     component: () => <EditProfile />,
    //     exact: true
    // }
];

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    tokenExpired: state.user.tokenExpired
});

// eslint-disable-next-line no-unused-vars
export default connect( mapStateToProps )( withRouter(({ match, history, currentUser, tokenExpired }) => {

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
            {
                routes.map( ( route, idx ) => (
                    <PrivateRoute
                        key={ idx }
                        exact={ route.exact }
                        path={ route.path }
                        Component={route.component} />
                ) )
            }
        </Switch>
    );
}));
