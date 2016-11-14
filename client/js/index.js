import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer'

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<div>
			<Timer />
			Hello World!
		</div>, 
		document.getElementById('app'))
})
