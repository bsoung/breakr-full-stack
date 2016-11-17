import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, guestLogin } from '../actions/actions';
import { Link } from 'react-router';


class Login extends Component {
	constructor (props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.onClickSkip = this.onClickSkip.bind(this);
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

		if (!user || !pass) {
			alert("Please enter a username and password!")
			return
		}  

		this.props.logIn(user, pass);
		
	}

	onClickSkip (e) {
		e.preventDefault();
		this.props.guestLogin()
	}

	render () {
		// const { fields: { username, password} } = this.props;
		
		return (
			<div className='login'>
				<h2>Welcome to Breakr</h2>
				<form onSubmit={this.handleFormSubmit}>
					
					<div className='form-group'>
						<label>Username</label>
						<input name='username' type='text' className='form-control'   />  
						 
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input name='password' type='password' className='form-control'   />
						 
					</div>
					<button type='submit' className='btn btn-primary'>Login</button>
					<Link to='/signup' className='btn btn-primary'>Register</Link>
					<button onClick={this.onClickSkip} type='button' className='btn btn-primary'>Guest</button>
					
				</form>

				
			</div>

		)
	}
}

// const validate = (values) => {
// 	const errors = {};

// 	if (!values.username) {
// 		errors.username = 'Enter a username';
// 	}

// 	if (!values.password) {
// 		errors.password = 'Enter a password';
// 	}

// 	return errors;
// }

// const validateObject = {
// 	form: 'Login',
// 	fields: ['username', 'password'],
// 	validate
// }

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}


export default connect(mapStateToProps, { logIn, guestLogin })(Login);