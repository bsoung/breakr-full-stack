var fetch = require('isomorphic-fetch');

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

var TIMER_START = 'TIMER_START'
var timerStart = function() {
	return {
		type: TIMER_START,
	}
};

exports.TIMER_START = TIMER_START;
exports.timerStart = timerStart;

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
