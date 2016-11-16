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
		this.props.dispatch(actions.breakTimerStart(this.state.input));
		//this.setState({input: ''});
	},	

	render: function() {
	// console.log('BREAKTIME::::', this.props.breakTimeRemaining - Date.now());
	// console.log(this.props.selectedTime);
	// console.log('PROPS:::::', this.props);

 //  console.log("What's breaktime", this.props.breakTimeRemaining)
	let timeLeft = this.props.breakTimeRemaining - Date.now();

	if (timeLeft > 0) {
		setTimeout(this.forceUpdate.bind(this), 1000);
	}

	
	// console.log('TIME REMAINING', this.props.breakTimeRemaining);
	// console.log('START:::', this.props.start);
	// console.log('LOCAL STATE', this.state.input);
	return (

	  <div className='container'> 

	  	<div className='counts'>
	  		<div className='workCount'>{this.props.selectedTime}</div>
	  		<div className='breakCount'>{ timeLeft < 0 ? 'Finished' : Math.floor(timeLeft / 1000) } </div>
		</div>

		<img src="http://i.giphy.com/gHmCa7Qq1bqj6" width="240" height="453" />

		{/*<form onSubmit={this.onFormSubmit} className='breakTimer'>
			<button type="button">-</button>
			<input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set break length' />
			<button type="button">+</button>
			<div><button type='submit'>Begin</button></div>
		</form>*/}

		<form onSubmit={this.onFormSubmit} className='workTimer'>
			<button type="button">-</button>
			<input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set work length' />
			<button type="button">+</button>
			<div><button type='submit'>Begin</button></div>
		</form>

	  </div>
	);
	}
	});


//onClick = action.timerStart 
const mapStateToProps = (state, props) => {
	console.log('STATE::::', state);
	return {
		start: state.start,
		breakTimeRemaining: state.breakTimeRemaining,
		//workTimeRemaining: state.workTimeRemaining,
		selectedTime: state.selectedTime
	}
}

let Container = connect(mapStateToProps)(Timer);

module.exports = Container;