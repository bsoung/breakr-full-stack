import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions'

class Login extends Component {
	constructor (props) {
		super(props)

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount () {
		this.checkUser(this.props.user);
	}

	componentWillReceiveProps (nextProps) { // react router lifecycle
		this.checkUser(nextProps.user)
	}

	checkUser (user) {
		if (user !== null) {
			this.props.router.replace('/timer');
		}
	}

	handleFormSubmit (e) {
		e.preventDefault();
		const user = e.target.username.value;
		const pass = e.target.password.value;

		this.props.dispatch(
			actions.logIn(user, pass)
		);
	}

	render () {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<h3>Please log in</h3>
					<div className='form-group'>
						<label>Username</label>
						<input name='username' type='text' className='form-control' />  
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input name='password' type='password' className='form-control' />  
					</div>
					<button type='submit' className='btn btn-primary'>Login</button>
				</form>
				
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}


export default connect(mapStateToProps)(Login);