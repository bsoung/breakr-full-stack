import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Profile extends Component {
	

	render () {

		return (
			<div>
				This is the user profile page!
				<Link to='/timer' >
					<button className='btn btn-primary'>Back</button>
				</Link>
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
