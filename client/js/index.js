import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';
import Settings from './components/Settings';
var Provider = require('react-redux').Provider;
var store = require('./store');

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<div className='container' >
			<Settings />
			<Provider store={store}>
				<Timer />	
			</Provider>
		</div>, 
		document.getElementById('app'))
})
