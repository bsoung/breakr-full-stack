import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateWork, updateBreaks, timerStart, timerComplete, logOut } from '../actions/actions';
import Sound from 'react-sound';
import { Link } from 'react-router';
import _ from 'lodash';


class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playSound: false,

		}

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onClickLogout = this.onClickLogout.bind(this);
	}

	notifyMe() {
		this.props.timerComplete();
		this.setState({
			playSound: true
		});

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

	onFormSubmit(e) {
		e.preventDefault();

		if (this.props.user) {

			if (e.target.timerType.value == "work") {

				this.props.updateWork(this.props.user.username, e.target.timerValue.value);
			}

			if (e.target.timerType.value == "break") {

				this.props.updateBreaks(this.props.user.username, e.target.timerValue.value);
			}
		}

		this.props.timerStart(e.target.timerValue.value * 60, e.target.timerType.value);

		
		e.target.timerValue.value = null;
	}


	onClickLogout(e) {
		e.preventDefault();
		this.setState({playSound: false});
		this.props.timerStart(null, '');
		this.props.logOut();
		this.props.router.push('/');
		
	}

	render() {
		const { timer } = this.props;
		let timeLeft = 0;

		let progress = 0;
		let color = '#432bec'

		if (timer.total !== null) {
		  timeLeft = Math.floor(((timer.timeStarted + (timer.total * 1000)) - Date.now()) / 1000);
		 
		  if (timeLeft <= 0) {
		    timeLeft = 0;
		    !timer.complete && this.notifyMe();
		    
		  } else {
		  	setTimeout(this.forceUpdate.bind(this), 1000);
		  }
		   progress = Math.floor(timeLeft / timer.total * 100);

			  if (progress < 5) {
			  	color = '#dbd6fb';
			  } else if (progress < 10) {
			  	color = '#cdc7fa';
			  } else if (progress < 20) {
			  	color = '#b2a8f7'
			  } else if (progress < 30) {
			  	color = '#a498f6'
			  } else if (progress < 40) {
			  	color = '#9688f5'
			  } else if (progress < 50) {
			  	color = '#8879f3'
			  } else if (progress < 60) {
			  	color = '#7b69f2'
			  } else if (progress < 70) {
			  	color = '#6d5af0'
			  } else if (progress < 80) {
			  	color = '#513aee'
			  } else if (progress < 90) {
			  	color = '#432bec'
			  }

		}

	  	return (
		  	<div className='timer'> 
		  		{this.props.user === null && (
				    <Link to='/' >
				  		<button onClick={this.onClickLogout} className='btn btn-danger logout-btn hvr-pop'>
				  		Login
				  		</button>
				  	</Link>

				)}

				{this.props.user !== null && ( // shortcut for if 
					<div>
						<Link to='/profile' >
			  				<button className='btn btn-primary logout-btn hvr-pop'>Stats</button>
			  			</Link>

						<Link to='/' onClick={this.onClickLogout}>
							<button className='btn btn-danger logout-btn hvr-pop'>Logout</button>
						</Link>
					</div>
				)}

		  	  	{ this.state.playSound && ( 
		  	  		<Sound url="../assets/alarm_sound.mp3"
					    playStatus={Sound.status.PLAYING}
					    playFromPosition={300 }
					    onFinishedPlaying={() => {
					    	this.setState({
					    		playSound: false // play the sound, play, when finished playing change so it does not play
					    	});
					    }} 
					/> 
				)}	  

				<h1>Breakr</h1>
				<h2>Interval training for productivity.</h2>

			  	<div className='timer-glass'>
			  	  	<div className='timer-block'>
				  	  	<div className='break-timer'>

							<h3>{_.upperFirst(timer.timerType)} Timer</h3>
							<div className='clockdiv'>

								<div className='clock-box'>
									<span className='minutes'>{Math.floor(timeLeft/60)}</span>
									<div className='smalltext'>Minutes</div> 
								</div> 
									
								<div>	
									<span className='seconds'>{timeLeft%60}</span> 
									<div className='smalltext'>Seconds</div>
								</div>

							</div>

							<form onSubmit={this.onFormSubmit} className='breakTimerForm'>
								<div>
									<div>
									  <label><input type="radio" name="timerType" value="work" required/> Work</label>
									  <label><input type="radio" name="timerType" value="break"  required/> Break</label>
									</div>
								</div>
								<div className='countdown-btn'>
									<input name='timerValue' type='number' placeholder='minutes' required/>
									<button className='submit-btn hvr-pop' type='submit'>Begin</button>
								</div>
							</form>						
						</div>

			  	  	</div>

			  	  	<div style={{width: "200px", height: "400px", position:"relative"}} className='hourglass-img'>
						<div style={{position: "absolute", bottom: 0, left: 0, width: "100%", height: `${progress}%`, backgroundColor: color}} >
							
						</div>
					</div>
		  	 	</div>
			</div>
		  
	  	 );
	}

}

const mapStateToProps = (state, props) => {
	return {
		timer: state.timer,
		user: state.user

	}
}

export default connect(mapStateToProps, { updateWork, updateBreaks, timerStart, timerComplete, logOut })(Timer);


