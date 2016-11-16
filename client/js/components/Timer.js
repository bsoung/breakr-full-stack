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
		this.setState({input: ''});
	},	

	render: function() {
  	let timeLeft = this.props.breakTimeRemaining - Date.now();

  	if (timeLeft > 0) {
  		setTimeout(this.forceUpdate.bind(this), 1000);
  	}

  	return (

  	  <div className='timer'> 

    	  <div className='counts'>
    	  	{/*<div className='workCount'>{this.props.selectedTime}</div>*/}
    	  	<div className='break-count'>{ timeLeft < 0 ? 0 : Math.floor(timeLeft / 1000) } </div>
    		</div>

        <div className='hourglass-img'>
          <img src="http://i.giphy.com/gHmCa7Qq1bqj6" width="244" height="453" />
        </div>
    		

    		{/*<form onSubmit={this.onFormSubmit} className='breakTimer'>
    			<button type="button">-</button>
    			<input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set break length' />
    			<button type="button">+</button>
    			<div><button type='submit'>Begin</button></div>
    		</form>*/}

    		<form onSubmit={this.onFormSubmit} className='workTimer'>
          <div className='countdown-btn'>
            <button type="button">-</button>
            <input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set work length' />
            <button type="button">+</button>
          </div>

    			<div><button className='submit-btn' type='submit'>Begin</button></div>
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