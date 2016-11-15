import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

// const Timer = () => {
// 	return (
// 		<div>Timer!</div>
// 	)
// }

//running timer
//animated timer
//buttons to increment/decrement time
//begin button


var Timer = React.createClass({

	getInitialState: function() {
		return {
			input: '',
		}
	},

	onInputChange: function(event) {
		this.setState({input: event.target.value});
	},

	onFormSubmit: function(event) {
		event.preventDefault();
		console.log('INSIDE')
		this.props.dispatch(actions.sendTime(this.state.input));
		this.setState({input: ''});
	},

	render: function() {
	console.log(this.props.selectedTime);
	// console.log('TIME REMAINING', this.props.breakTimeRemaining);
	// console.log('START:::', this.props.start);
	// console.log('LOCAL STATE', this.state.input);
	return (

	  <div className='container'> 

	  	<div className='counts'>
	  		<div className='workCount'>this is TIME REMAINING{this.props.workTimeRemaining}</div>
	  		<div className='breakCount'>this is TIME REMAINING{this.props.breakTimeRemaining}</div>
		</div>

		<img src="http://i.giphy.com/gHmCa7Qq1bqj6" width="240" height="453" />

		<form onSubmit={this.onFormSubmit} className='breakTimer'>
			<button type="button">-</button>
			<input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set break length' />
			<button type="button">+</button>
			<div><button type='submit'>Begin</button></div>
		</form>

		<form className='workTimer'>
			<button type="button">-</button>
			<input placeholder='Set work length' />
			<button type="button">+</button>
		</form>

		<button type='button'>Begin</button>

	  </div>
	);
	}
	});


//onClick = action.timerStart 
const mapStateToProps = (state, props) => {

	return {
		start: state.start,
		breakTimeRemaining: state.breakTimeRemaining,
		workTimeRemaining: state.workTimeRemaining,
		selectedTime: state.selectedTime
	}
}

let Container = connect(mapStateToProps)(Timer);

module.exports = Container;