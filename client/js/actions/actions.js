const fetch = require('isomorphic-fetch');

export const TIMER_START = 'TIMER_START';
export function timerStart(seconds, timerType) {
	return {
		type: TIMER_START,
		seconds: seconds,
		timerType,
		timeStarted: Date.now()
	}
};

export const TIMER_COMPLETE = 'TIMER_COMPLETE';
export function timerComplete() {
	return {
		type: TIMER_COMPLETE
	}
}

export const FETCH_ERROR = 'FETCH_ERROR';
export function fetchError(error) {
	return {
		type: FETCH_ERROR,
		error: error
	}
}

export const SET_USER = 'SET_USER';
export function setUser(user) {
	return {
		type: SET_USER,
		user: user
	}
}

export const SET_WORK = 'SET_WORK';
export function setWork(work) {
	return {
		type: SET_WORK,
		work
	}
} 

export const SET_BREAKS = 'SET_BREAKS';
export function setBreaks(breaks) {
	return {
		type: SET_BREAKS,
		breaks
	}
} 

export function logOut () {
	localStorage.username = null;
	return setUser(null);
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

			localStorage.username = data.user.username;

			return dispatch(
				setUser(data.user) 
			)
		})
		
		.catch((error) => {
			alert("Please check your login info and try again!")
			return dispatch(
				fetchError(error) 
			);
		});
	}
}

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
			console.log(data, 'data after user is created.')

			localStorage.username = data.user.username;

			return dispatch(
				setUser(data.user)
			)
		})

		.catch((error) => {
			alert("Username is taken!");
			return dispatch(
				fetchError(error)
			);
		});
	}
}

export function updateWork (username, work) {
	return (dispatch) => {
		const url = `/api/user/${username}`;
		const req = {username, work};

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
			console.log(data, 'data after work is updated.')

			return dispatch(
				setWork(data.user.timer.work)
			)
		})

		.catch((error) => {
			return dispatch(
				fetchError(error)
			);
		});
	}
}

export function updateBreaks (username, breaks) {
	return (dispatch) => {
		const url = `/api/user/${username}`;
		const req = {username, breaks};

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
			console.log(data, 'data after breaks is updated.')

			return dispatch(
				setBreaks(data.user.timer.breaks)
			)
		})

		.catch((error) => {
			return dispatch(
				fetchError(error)
			);
		});
	}
}

export function getUser (username) {
	return (dispatch) => {	
	    fetch(
			`/api/user/${username}`, 
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
			console.log(data, 'Got this user')

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





