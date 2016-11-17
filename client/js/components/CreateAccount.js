import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/actions';
import { Link } from 'react-router';

class CreateAccount extends Component {	
	constructor (props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount () {
		this.checkUser(this.props.user);
	}

	componentWillReceiveProps (nextProps) { // react router lifecycle
		this.checkUser(nextProps.user);
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
		const repass = e.target.passwordAgain.value;

		if (!user || !pass || !repass) {
			alert('Please enter a username and password!');
			return;
		}

		if (pass !== repass) {
			alert('Password does not match!')
			return;
		}  

		this.props.router.push('/timer');

	}

	render () {
		return (
			<div className='login'>
				<h2>Sign Up!</h2>
				<form onSubmit={this.handleFormSubmit}>
					
					<div className='form-group'>
						<label>Username</label>
						<input name='username' type='text' className='form-control' />  
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input name='password' type='password' className='form-control' />  
					</div>

					<div className='form-group'>
						<label>Retype Password</label>
						<input name='passwordAgain' type='password' className='form-control' />  
					</div>

					<button type='submit' className='btn btn-primary'>Create</button>
					<Link to='/'>
						<button type='submit' className='btn btn-danger'>Cancel</button>
					</Link>
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

export default connect(mapStateToProps, { createUser })(CreateAccount);