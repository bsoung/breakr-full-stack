import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/actions';

class App extends Component {
	componentWillMount () {
		console.log('here in app js', this.props.user, localStorage.username)
		if (this.props.user === null && localStorage.username !== null) {

			this.props.getUser(localStorage.username);
		}
	}

	render() {
	    return (
	      <div className='container' >
			{this.props.children}
		  </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, { getUser })(App);
