import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Timer from './components/Timer';
import Login from './components/Login';
import App from './components/app';
import CreateAccount from './components/CreateAccount';

// attribute on Route onEnter= 
// function if user does not exists, route back to login

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Timer} />
		<Route path='timer' component={Timer} />
		<Route path='signup' component={CreateAccount} />
	</Route>
);



