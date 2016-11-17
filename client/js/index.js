import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
var Provider = require('react-redux').Provider;
import store from './store';
import { Router, browserHistory } from 'react-router';
import routes from './Route';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render( 
			<Provider store={store}>
				<Router history={browserHistory} routes={routes} />
			</Provider>, document.getElementById('app'))
})
