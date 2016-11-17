import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Profile extends Component {
	render () {
		return (
			<div className='profile'>
				<Link to='/timer' >
					<button className='btn btn-primary back-btn'>Back</button>
				</Link>
				<h3 className='profile-intro' >Welcome, {this.props.user}</h3>
				<div className='habit-info'>
					<h4>Statistics</h4>
					<p>Number of Breaks</p>
					<p>Total Break Time</p>
					<p>Total Work Time</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile);
