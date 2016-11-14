var actions = require('../actions/actions');

var initialState = {
	selectedImage: null,
	checkedOptions: [],
	account: null,
	selectedMusic: null,
	selectedTime: 0
};

var settingsReducer = function(state, action) {
	var copyState = state || initialState;

	state = Object.assign({}, copyState);
	console.log(state.selectedImage);
	console.log(state.selectedMusic);
	console.log(state.checkedOptions);
	console.log(state.account);

}

var timerReducer = function(state, action) {
	var copyState = state || initialState;
	state = Object.assign({}, copyState);
	console.log(state.selectedTime);

}


exports.settingsReducer = settingsReducer;
exports.timerReducer = timerReducer;
