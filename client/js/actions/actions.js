const fetch = require('isomorphic-fetch');

/** Action Creators */


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

/** Async Action Creators */

export const FETCH_ERROR = 'FETCH_ERROR';
export function fetchTimeError (error) {
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

			dispatch(
				setUser(res.json().user)
			);

			return; 
		
		})
		
		.catch((error) => {
			return dispatch(
				fetchTimeError(error) // TODO: SET_NOTIFICATION type, 
			);
		});
	}
}

/*

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
		const url = '/timer';
		return fetch(url, {method: 'post', 
			body: '{"time": '+ time + '}', 
			headers: {'content-type': 'application/json', 'Accept':'application/json'}  })

		.then((res) => {
			if (res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.res = res;
				throw error;
			}
			const selectedTime = res.json().time;
			return dispatch(
				sendTimeSuccess(selectedTime)
			); 
		})

		.catch((error) => {
			return dispatch(
				fetchTimeError(error)
			);
		});
	}
}

/** Async Action exports */

// exports.SET_USER = SET_USER
// exports.logIn = logIn;



// /** Action exports */

// exports.WORK_TIMER_START = WORK_TIMER_START;
// exports.workTimerStart = workTimerStart;

// exports.BREAK_TIMER_START = BREAK_TIMER_START;
// exports.breakTimerStart = breakTimerStart;



