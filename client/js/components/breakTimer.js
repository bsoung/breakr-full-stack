import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';
var Sound = require('react-sound');

// document.addEventListener('DOMContentLoaded', function () {
//   if (Notification.permission !== "granted")
//     Notification.requestPermission();
// });

var breakTimer = React.createClass({

 //  notifyMe: function() {
 //    if (!Notification) {
 //      alert('Desktop notifications not available in your browser. Try Chromium.'); 
 //      return;
 //    }

 //    if (Notification.permission !== "granted")
 //      Notification.requestPermission();
 //    else {
 //      var notification = new Notification('Breakr', {
 //        icon: 'https://lh4.ggpht.com/mKrnPRmtBinlSg_nDiqiSI7uPL7PpifQTu9FuSRawCzl9Abo17KXdOQfLPDG0gq5HrT3=w300',
 //        body: "Hey there! Time's up!",
 //      });
 //    }

 //  },

	// getInitialState: function() {
	// 	return {
	// 		input: '',
	// 	}
	// },

	// onInputChange: function(event) {
	// 	this.setState({input: event.target.value});
	// },

	// onFormSubmit: function(event) {
	// 	event.preventDefault();
 //    const toMinutes = this.state.input;
	// 	this.props.dispatch(actions.breakTimerStart(toMinutes));
	// 	this.setState({input: ''});
	// },	

	render: function() {
  // 	let timeLeft = this.props.breakTimeRemaining - Date.now();
  //   let time2 = Math.abs(timeLeft);
  // 	if (timeLeft > 0) {
  // 		setTimeout(this.forceUpdate.bind(this), 1000);
  // 	}
  //   if (time2 <= 500) {

  //     this.notifyMe();
  //   }

  // 	return (

  // 	  <div className='timer'> 
  // 	  	{ time2 <= 500 ? <Sound url="../assets/alarm_sound.mp3"
		// 				    playStatus={Sound.status.PLAYING}
		// 				    playFromPosition={300 /* in milliseconds */}
		// 				    onLoading={this.handleSongLoading}
		// 				    onPlaying={this.handleSongPlaying}
		// 				    onFinishedPlaying={this.handleSongFinishedPlaying} /> : '' }
  	  	

		// <div className='counts'>
		// 	{/*<div className='workCount'>{this.props.selectedTime}</div>*/}
		// 	<div className='break-count'>{ timeLeft < 0 ? 0 : Math.floor(timeLeft/1000/60)} : { timeLeft < 0 ? 0 : Math.floor((timeLeft / 1000)%60) } </div>
		// </div>

		// <form onSubmit={this.onFormSubmit} className='breakTimer'>
		// <div className='countdown-btn'>
		// <button type="button">-</button>
		// <input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set work length' />
		// <button type="button">+</button>
		// </div>

		// 	<div><button className='submit-btn' type='submit'>Begin</button></div>
		// </form>

  // 	  </div>
  // 	 );
  		<div>hello world</div>
	}

});

module.exports = breakTimer;
//onClick = action.timerStart 
// const mapStateToProps = (state, props) => {
// 	console.log('STATE::::', state);
// 	return {
// 		start: state.start,
// 		breakTimeRemaining: state.breakTimeRemaining,
// 		//workTimeRemaining: state.workTimeRemaining,
// 		selectedTime: state.selectedTime
// 	}
// }

// let Container = connect(mapStateToProps)(breakTimer);

// module.exports = Container;