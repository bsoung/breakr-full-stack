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
  render: function() {
    console.log('TIME REMAINING', this.props.breakTimeRemaining);
    console.log('START:::', this.props.start);
    return (

      <div className='container'> 

      	<div className='counts'>
      		<div className='workCount'>this is TIME REMAINING{this.props.workTimeRemaining}</div>
      		<div className='breakCount'>this is TIME REMAINING{this.props.breakTimeRemaining}</div>
		</div>

		<img src="http://i.giphy.com/gHmCa7Qq1bqj6" width="480" height="907" />

		<div className='breakStart'>this is TIME REMAINING{this.props.breakTimeRemaining}</div>
			<div>this is START {this.props.start}</div>
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
	}
}

let Container = connect(mapStateToProps)(Timer);

module.exports = Container;