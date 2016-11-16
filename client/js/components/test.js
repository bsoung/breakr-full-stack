import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

var Test = React.createClass({

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
	// 	this.props.dispatch(actions.breakTimerStart(this.state.input));
	// 	this.setState({input: ''});
	// },	

  getTimeRemaining: function(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
       'total': t,
       'days': days,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds
    };
  },

  initializeClock: function(id, endtime) {
   // var clock = document.getElementById(id);
    var clock = this.refs.clockdiv;
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  },



	render: function() {
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    this.initializeClock('clockdiv', deadline);

  	return (
      <div>
        <h1>Countdown Clock</h1>
        <div id="clockdiv">
          <div>
            <span className="days"></span>
            <div className="smalltext">Days</div>
          </div>
          <div>
            <span className="hours"></span>
            <div className="smalltext">Hours</div>
          </div>
          <div>
            <span className="minutes"></span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds"></span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
      </div>
  	);

	}

});



module.exports = Test;