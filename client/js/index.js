import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';
var Provider = require('react-redux').Provider;
var store = require('./store');

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<div>
				<Timer />
				Hello World!
			</div>
		</Provider>, 
		document.getElementById('app'))
})
