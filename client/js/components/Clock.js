import React, { Component } from 'react';

export default class Clock extends Component {
    render () {

    let t = this.props.deadline - Date.now();
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   
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
}

