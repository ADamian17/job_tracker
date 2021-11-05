import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import JobsContainer from "../containers/JobsContainer/JobsContainer";

const Div = () => (<div>Profile</div>)

const DashBoardRoutes = () => {
    const match = useRouteMatch();
    const { currentUser } = useSelector(({user}) => user);

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
           <PrivateRoute
                exact
                path={match.path}
                Component={JobsContainer} />
           <PrivateRoute
                exact
                path={`${match.path}/profile`}
                Component={Div} />
        </Switch>
    );
}

export default DashBoardRoutes;
