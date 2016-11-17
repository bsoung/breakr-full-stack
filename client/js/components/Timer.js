import React, { Component } from 'react';
import { connect } from 'react-redux';
import { workTimerStart, breakTimerStart, logOut } from '../actions/actions';
import Sound from 'react-sound';
import Clock from './Clock';
import { Link } from 'react-router';


class Timer extends Component {
	constructor (props) {
		super(props);

		this.state = {
			input: '',
			breakInput: ''
		}


		this.onInputChange = this.onInputChange.bind(this);
		this.onBreakInputChange = this.onBreakInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onBreakFormSubmit = this.onBreakFormSubmit.bind(this);
		this.onClickLogout = this.onClickLogout.bind(this);
	}

	notifyMe () {
	    if (!Notification) {
	      alert('Desktop notifications not available in your browser. Try Chromium.'); 
	      return;
	    }

	    if (Notification.permission !== "granted")
	      Notification.requestPermission();

	    else {
	      const notification = new Notification('Breakr', {
	        icon: 'https://lh4.ggpht.com/mKrnPRmtBinlSg_nDiqiSI7uPL7PpifQTu9FuSRawCzl9Abo17KXdOQfLPDG0gq5HrT3=w300',
	        body: "Hey there! Time's up!",
	      });
	    }

  	}

  	onInputChange (e) {
		this.setState({input: e.target.value});
	}

	onBreakInputChange (e) {
		this.setState({breakInput: e.target.value});
	}

	onFormSubmit (e) {
		e.preventDefault();
    	const toMinutes = this.state.input;
		this.props.workTimerStart(toMinutes);
		this.setState({input: ''});
	}

	onBreakFormSubmit (e) {
		e.preventDefault();
    	const toMinutes = this.state.breakInput;
		this.props.breakTimerStart(toMinutes);
		this.setState({breakInput: ''});
	}

	onClickLogout (e) {
		// e.preventDefault()
		console.log(this.props.user)
		this.props.logOut(this.props.user)
		console.log(this.props.user)
			// this.props.router.replace('/');
		
	}

	render () {

	console.log(this.props)
		
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

  	return (
	  	<div className='timer'> 
	  		<Link to='/' onClick={this.onClickLogout}>
	  			<button className='btn button-danger logout-btn'>Logout</button>
	  		</Link>

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
							    
	  	  	<div className='timer-block'>
		  	  	<div className='breakTimer'>
					<h2>Break Timer</h2>
					<div className='clockdiv'>
						<div className='clock-box'>
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
						<div className='clock-box'>
							<span className='minutes'>{ workTimeLeft < 0 ? 0 : Math.floor(workTimeLeft/1000/60)}</span>
							<div className='smalltext'>Minutes</div> 
						</div>

						<div>
							<span className='seconds'>{ workTimeLeft < 0 ? 0 : Math.floor((workTimeLeft / 1000)%60) }</span> 
							<div className='smalltext'>Seconds</div>
						</div>
					</div>
				</div>
	  	  	</div>
	  	 

			<div width='240' className='hourglass-img'>
				<img className='glass' src="http://i.giphy.com/gHmCa7Qq1bqj6" width="244" />
			</div>

			<form onSubmit={this.onBreakFormSubmit} className='breakTimerForm'>
				<div className='countdown-btn'>
					<button className='plusMinus' type="button">-</button>
					<input value={this.state.breakInput} onChange={this.onBreakInputChange} type='number' placeholder='Set break length' />
					<button className='plusMinus' type="button">+</button>
				</div>
				<div><button className='submit-btn' type='submit'>Begin</button></div>
			</form>

			<form onSubmit={this.onFormSubmit} className='workTimerForm'>
				<div className='countdown-btn'>
					<button className='plusMinus' type="button">-</button>
					<input value={this.state.input} onChange={this.onInputChange} type='number' placeholder='Set work length' />
					<button className='plusMinus' type="button">+</button>
				</div>
				<div><button className='submit-btn' type='submit'>Begin</button></div>
			</form>

		</div>
	  
  	 );
	}

}

const mapStateToProps = (state, props) => {
	return {
		breakTimeRemaining: state.breakTimeRemaining,
		workTimeRemaining: state.workTimeRemaining,
		user: state.user
	}
}

export default connect(mapStateToProps, { workTimerStart, breakTimerStart, logOut })(Timer);


