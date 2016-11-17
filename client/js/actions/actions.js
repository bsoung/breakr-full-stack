var fetch = require('isomorphic-fetch');

/** Action Creators */

var CHECK_OPTIONS = 'CHECK_OPTIONS'
var checkOptions = function(options) {
	return {
		type: CHECK_OPTIONS,
		checkedOptions: options
	}
};


var SELECT_IMAGE = 'SELECT_IMAGE'
var selectImage = function(image) {
	return {
		type: SELECT_IMAGE,
		selectedImage: image
	}

};

var ADD_ACCOUNT = 'ADD_ACCOUNT'
var addAccount = function(account) {
	return {
		type: ADD_ACCOUNT,
		account: account
	}
};

var SELECT_MUSIC = 'SELECT_MUSIC'
var selectMusic = function(music) {
	return {
		type: SELECT_MUSIC,
		selectedMusic: music
	}

};

var FETCH_ACCOUNT = 'FETCH_ACCOUNT'
var fetchAccount = function(account) {
	return {
		type: FETCH_ACCOUNT,
		account: account
	}
};

var FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR'
var fetchAccountError = function(error) {
	return {
		type: FETCH_ACCOUNT_ERROR,
		error:  error
	}
};

var CHANGE_TIME = 'CHANGE_TIME'
var changeTime = function(time) {
	return {
		type: CHANGE_TIME,
		selectedTime: time
	}
};

var WORK_TIMER_START = 'WORK_TIMER_START'
var workTimerStart = function(minutes) {
	return {
		type: WORK_TIMER_START,
		minutes: minutes
	}
};

var BREAK_TIMER_START = 'BREAK_TIMER_START'
var breakTimerStart = function(minutes) {
	console.log("minutes?", minutes)
	return {
		type: BREAK_TIMER_START,
		minutes: minutes
	}
};

/** Async Action Creators */

const FETCH_ERROR = 'FETCH_ERROR';
const fetchTimeError = (error) => {
	return {
		type: FETCH_ERROR,
		error: error
	}
}

const SEND_TIME = 'SEND_TIME';
const sendTimeSuccess = (time) => {
	console.log('action creator time:   ', time);
	return {
		type: SEND_TIME,
		time: time
	}
}

const FETCH_TIME = 'FETCH_TIME';
const fetchTimeSuccess = (time) => {
	return {
		type: FETCH_TIME,
		time: time
	}
}

const SET_USER = 'SET_USER';
const setUser = (user) => {
	return {
		type: SET_USER,
		user: user
	}
}

const logIn = (username, password) => {
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


const createUser = (username, password) => {
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

exports.SET_USER = SET_USER
exports.logIn = logIn;





/** Action exports */

exports.WORK_TIMER_START = WORK_TIMER_START;
exports.workTimerStart = workTimerStart;

exports.BREAK_TIMER_START = BREAK_TIMER_START;
exports.breakTimerStart = breakTimerStart;

exports.FETCH_ACCOUNT_ERROR = FETCH_ACCOUNT_ERROR;
exports.fetchAccountError = fetchAccountError;

exports.CHECK_OPTIONS = CHECK_OPTIONS;
exports.checkOptions = checkOptions;

exports.SELECT_IMAGE = SELECT_IMAGE;
exports.selectImage = selectImage;

exports.ADD_ACCOUNT = ADD_ACCOUNT;
exports.addAccount = addAccount;

exports.SELECT_MUSIC = SELECT_MUSIC;
exports.selectMusic = selectMusic;

exports.FETCH_ACCOUNT = FETCH_ACCOUNT;
exports.fetchAccount = fetchAccount;

exports.CHANGE_TIME = CHANGE_TIME;
exports.changeTime = changeTime;
