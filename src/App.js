import React from 'react';
import { withRouter } from 'react-router-dom';

import './App.scss';

import Routes from './config/routes';

const App = () => <Routes />;

export default withRouter(App);
