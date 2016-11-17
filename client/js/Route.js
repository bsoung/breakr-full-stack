import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Timer from './components/Timer';
import Login from './components/Login';
import App from './components/app';

// attribute on Route onEnter= 
// function if user does not exists, route back to login

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Login} />
		<Route path='timer' component={Timer} />
	</Route>
);



