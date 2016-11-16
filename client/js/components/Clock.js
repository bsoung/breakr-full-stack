import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions';

var Clock = React.createClass({

	render: function() {

    var t = this.props.deadline - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    console.log(t);
    
    if (t > 0) {
      setTimeout(this.forceUpdate.bind(this), 1000);
    }

  	return (

      <div>
        <div className="clockdiv">
          <div>
            <span className="hours">{('0' + hours).slice(-2)}</span>
            <div className="smalltext">Hours</div>
          </div>
          <div>
            <span className="minutes">{('0' + minutes).slice(-2)}</span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds">{('0' + seconds).slice(-2)}</span>
            <div className="smalltext">Seconds</div>
          </div>
        </div>
      </div>
  	);

	}

});



module.exports = Clock;