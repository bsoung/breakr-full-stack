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

		if (pass !== repass) {
			alert('Password does not match!')
			return;
		}  

		this.props.createUser(user, pass);
	}

	render () {
		return (
			<div className='login'>
				<div className='signup-group'>
					<h2>Sign Up!</h2>
					<form onSubmit={this.handleFormSubmit}>
						
						<div className='form-group'>
							<label className='username'>Username</label>
							<input name='username' type='text' className='form-control' required/>  
						</div>

						<div className='form-group'>
							<label className='genpassword'>Password</label>
							<input name='password' type='password' className='form-control' required/>  
						</div>

						<div className='form-group'>
							<label className="password">Retype Password</label>
							<input name='passwordAgain' type='password' className='form-control' required/>  
						</div>

						<div className='signup-btn-group'>
							<button type='submit' className='btn btn-primary signup-btn hvr-pop'>Create</button>
							<Link to='/'>
								<button type='submit' className='btn btn-danger signup-btn hvr-pop'>Cancel</button>
							</Link>
						</div>
					</form>
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

export default connect(mapStateToProps, { createUser })(CreateAccount);