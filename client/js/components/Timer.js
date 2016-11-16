import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';
var Sound = require('react-sound');
import Clock from './Clock';

document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

var Timer = React.createClass({

  notifyMe: function() {
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.'); 
      return;
    }

    if (Notification.permission !== "granted")
      Notification.requestPermission();
    else {
      var notification = new Notification('Breakr', {
        icon: 'https://lh4.ggpht.com/mKrnPRmtBinlSg_nDiqiSI7uPL7PpifQTu9FuSRawCzl9Abo17KXdOQfLPDG0gq5HrT3=w300',
        body: "Hey there! Time's up!",
      });
    }

  },

	getInitialState: function() {
		return {
			input: '',
			breakInput: ''
		}
	},

	onInputChange: function(event) {
		this.setState({input: event.target.value});
	},

	onBreakInputChange: function(event) {
		this.setState({breakInput: event.target.value});
	},

	onFormSubmit: function(event) {
		event.preventDefault();
    	const toMinutes = this.state.input;
		this.props.dispatch(actions.workTimerStart(toMinutes));
		this.setState({input: ''});
	},

	onBreakFormSubmit: function(event) {
		event.preventDefault();
    	const toMinutes = this.state.breakInput;
		this.props.dispatch(actions.breakTimerStart(toMinutes));
		this.setState({breakInput: ''});
	},	

	render: function() {
  	let timeLeft = this.props.breakTimeRemaining - Date.now();
    let time2 = Math.abs(timeLeft);
  	if (timeLeft > 0) {
  		setTimeout(this.forceUpdate.bind(this), 1000);
  	}
    if (time2 <= 500) {

      this.notifyMe();

    }

    let workTimeLeft = this.props.workTimeRemaining - Date.now();
    let workTime2 = Math.abs(workTimeLeft);
  	if (workTimeLeft > 0) {
  		setTimeout(this.forceUpdate.bind(this), 1000);
  	}
    if (workTime2 <= 500) {

      this.notifyMe();
    }
   	const hours = 2;
   	const minutes = 10;

  	return (

  		<div className='timer'> 

  	  	{ time2 <= 500 ? <Sound url="../assets/alarm_sound.mp3"
						    playStatus={Sound.status.PLAYING}
						    playFromPosition={300 }
						    onLoading={this.handleSongLoading}
						    onPlaying={this.handleSongPlaying}
						    onFinishedPlaying={this.handleSongFinishedPlaying} /> : '' }

		{ workTime2 <= 500 ? <Sound url="../assets/alarm_sound.mp3"
						    playStatus={Sound.status.PLAYING}
						    playFromPosition={300 }
						    onLoading={this.handleSongLoading}
						    onPlaying={this.handleSongPlaying}
						    onFinishedPlaying={this.handleSongFinishedPlaying} /> : '' }
  	  	
  	  	<div className='breakTimer'>
			<h2>Break Timer</h2>
			<div className='clockdiv'>
				<div>
					<span className='minutes'>{ timeLeft < 0 ? 0 : Math.floor(timeLeft/1000/60)}</span>
					<div className='smalltext'>Minutes</div> 
				</div> 
					
				<div>	
					<span className='seconds'>{ timeLeft < 0 ? 0 : Math.floor((timeLeft / 1000)%60) }</span> 
					<div className='smalltext'>Seconds</div>
				</div>
			</div>
		</div>

		<div className='workTimer'>
			<h2>Work Timer</h2>
			<div className='clockdiv'>
				<div>
					<span className='minutes'>{ workTimeLeft < 0 ? 0 : Math.floor(workTimeLeft/1000/60)}</span>
					<div className='smalltext'>Minutes</div> 
				</div>

				<div>
					<span className='seconds'>{ workTimeLeft < 0 ? 0 : Math.floor((workTimeLeft / 1000)%60) }</span> 
					<div className='smalltext'>Seconds</div>
				</div>
			</div>
		</div>

		<div width='240' className='hourglass-img'>
			<img  src="http://i.giphy.com/gHmCa7Qq1bqj6" width="244" />
		</div>

		<form onSubmit={this.onBreakFormSubmit} className='breakTimer'>
			<div className='countdown-btn'>
				<button type="button">-</button>
				<input value={this.state.breakInput} onChange={this.onBreakInputChange} type='number' placeholder='Set break length' />
				<button type="button">+</button>
			</div>
			<div><button className='submit-btn' type='submit'>Begin</button></div>
		</form>

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
		workTimeRemaining: state.workTimeRemaining,
		selectedTime: state.selectedTime
	}
}

let Container = connect(mapStateToProps)(Timer);

module.exports = Container;

/* <div className='timer'> 

  	  	{ time2 <= 500 ? <Sound url="../assets/alarm_sound.mp3"
						    playStatus={Sound.status.PLAYING}
						    playFromPosition={300 }
						    onLoading={this.handleSongLoading}
						    onPlaying={this.handleSongPlaying}
						    onFinishedPlaying={this.handleSongFinishedPlaying} /> : '' }

		{ workTime2 <= 500 ? <Sound url="../assets/alarm_sound.mp3"
						    playStatus={Sound.status.PLAYING}
						    playFromPosition={300 }
						    onLoading={this.handleSongLoading}
						    onPlaying={this.handleSongPlaying}
						    onFinishedPlaying={this.handleSongFinishedPlaying} /> : '' }
  	  	

		<div className='clockdiv'>
			
			<div className='break-count'>
				<span className='hours'>{ timeLeft < 0 ? 0 : Math.floor(timeLeft/1000/60)}</span>
				<div className='smalltext'>Hours</div>  
				
				<span className='minutes'>{ timeLeft < 0 ? 0 : Math.floor((timeLeft / 1000)%60) }</span> 
				<div className='smalltext'>Minutes</div>
			</div>
		</div>

		<div className='counts'>
			
			<div className='break-count'>{ workTimeLeft < 0 ? 0 : Math.floor(workTimeLeft/1000/60)} : { workTimeLeft < 0 ? 0 : Math.floor((workTimeLeft / 1000)%60) } </div>
		</div>

		<div className='hourglass-img'>
		<img src="http://i.giphy.com/gHmCa7Qq1bqj6" width="244" height="453" />
		</div>

		<form onSubmit={this.onBreakFormSubmit} className='breakTimer'>
			<div className='countdown-btn'>
				<button type="button">-</button>
				<input value={this.state.breakInput} onChange={this.onBreakInputChange} type='number' placeholder='Set break length' />
				<button type="button">+</button>
			</div>
			<div><button className='submit-btn' type='submit'>Begin</button></div>
		</form>

		<form onSubmit={this.onFormSubmit} className='workTimer'>
			<div className='countdown-btn'>
				<button type="button">-</button>
				<input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set work length' />
				<button type="button">+</button>
			</div>
			<div><button className='submit-btn' type='submit'>Begin</button></div>
		</form>

	  </div> */



/*<h1>Break Timer</h1>
  			<Clock deadline={Date.now() + hours * 60 * 60 * 1000} />

  			<h1>Work Timer</h1>
  			<Clock deadline={Date.now() + hours * 60 * 60 * 1000} />

  			<div className='hourglass-img'>
				<img src="http://i.giphy.com/gHmCa7Qq1bqj6" width="244" height="453" />
			</div>*/



