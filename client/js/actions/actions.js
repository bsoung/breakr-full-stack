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
var workTimerStart = function() {
	return {
		type: WORK_TIMER_START,
	}
};

var BREAK_TIMER_START = 'BREAK_TIMER_START'
var breakTimerStart = function(minutes) {
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

const fetchTime = (time) => {
	return (dispatch) => {
		const url = '/timer';
		return fetch(url) //GET
		.then((res) => {
			if (res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.res = res;
				throw error;
			}

			return res.json();
		})
		.then((data) => {
			const selectedTime = data.time;
			return dispatch(
				fetchTimeSuccess(selectedTime)
			); 
		})
		.catch((error) => {
			return dispatch(
				fetchTimeError(error)
			);
		});
	}
}


const sendTime = (time) => {
	return (dispatch) => {
		const url = '/timer';
		return fetch(url, {method: 'post', 
			body: '{"time": '+ time + '}', 
			headers: {'content-type': 'application/json', 'Accept':'appliction/json'}  })

		.then((res) => {
			if (res.status < 200 || res.status >= 300) {
				const error = new Error(res.statusText);
				error.res = res;
				throw error;
			}

			return res.json();
		})
		.then((data) => {
			const selectedTime = data.time;
			console.log('selectedTime is:    ', selectedTime);
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

/** Asyn Action exports */

exports.sendTime = sendTime;
exports.fetchTime = fetchTime;

exports.SEND_TIME = SEND_TIME;
exports.sendTimeSuccess = sendTimeSuccess;

exports.FETCH_TIME = FETCH_TIME;
exports.fetchTimeSuccess = fetchTimeSuccess;


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
