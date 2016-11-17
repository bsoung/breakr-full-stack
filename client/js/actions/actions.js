const fetch = require('isomorphic-fetch');

export const WORK_TIMER_START = 'WORK_TIMER_START'
export function workTimerStart (minutes) {
	return {
		type: WORK_TIMER_START,
		minutes: minutes
	}
};

export const BREAK_TIMER_START = 'BREAK_TIMER_START'
export function breakTimerStart (minutes) {
	return {
		type: BREAK_TIMER_START,
		minutes: minutes
	}
};

export const FETCH_ERROR = 'FETCH_ERROR';
export function fetchError (error) {
	return {
		type: FETCH_ERROR,
		error: error
	}
}

export const SET_USER = 'SET_USER';
export function setUser (user) {
	return {
		type: SET_USER,
		user: user
	}
}

export const LOGOUT_USER = 'LOGOUT_USER';
export function logOut (user) {
	return {
		type: LOGOUT_USER,
		user: user
	}
}



export function logIn (username, password) {
	return (dispatch) => {
		const url = '/api/login';
		const req = {username, password};

		return fetch(
			url, 
			{
				method: 'post', 
				body: JSON.stringify(req), 
				headers: {'content-type': 'application/json', 'Accept':'application/json'} 
			}
		)

		.then((res) => {
			if (res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.res = res;
				throw error;
			}

			return res.json()	
		
		})
		.then((data) => {
			console.log(data)
			return dispatch(
				setUser(data.user.username)
			)
		})
		
		.catch((error) => {
			return dispatch(
				fetchError(error) // TODO: SET_NOTIFICATION type, 
			);
		});
	}
}

/* IMPORTANT:

export function setNotification(msg, type) {
  return {
    type: SET_NOTIFICATION,
    notification: {
      type,
      msg
    }
  }
}

export function setError(msg) {
  return setNotification(msg, 'error');
}




setNotification('this is my message', 'error');

setError('this is my message');


 */

export function createUser (username, password) {
	return (dispatch) => {
		const url = '/api/user';
		const req = {username, password};

		return fetch(
			url, 
			{
				method: 'post', 
				body: JSON.stringify(req), 
				headers: {'content-type': 'application/json', 'Accept':'application/json'} 
			}
		)

		.then((res) => {
			if (res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.res = res;
				throw error;
			}

			return res.json();
		})
		.then((data) => {
			console.log(data)
			return dispatch(
				setUser(data.user)
			)
		})

		.catch((error) => {
			return dispatch(
				fetchError(error)
			);
		});
	}
}





