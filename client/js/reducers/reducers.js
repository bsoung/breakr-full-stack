var actions = require('../actions/actions');

var initialState = {
	selectedImage: null,
	checkedOptions: [],
	account: null,
	selectedMusic: null,
	selectedTime: 0,
	start: false,
	workTimeRemaining: null,
	breakTimeRemaining: null,
};

var settingsReducer = function(state, action) {
	var copyState = state || initialState;
	state = Object.assign({}, copyState);

	if (action.type = actions.SELECT_IMAGE) {
		state.selectedImage = action.selectedImage;
	}
	else if (action.type = actions.CHECK_OPTIONS) {
		state.checkedOptions = action.checkedOptions;
	}
	else if (action.type = actions.SELECT_MUSIC) {
		state.selectedMusic = action.selectedMusic;
	}
	else if (action.type = actions.CHANGE_TIME) {
		state.selectedTime = action.selectedTime;
	}
	else if (action.type = actions.WORK_TIMER_START) {
		state.start = true;
		state.workTimeRemaining = (Date.now() + 600000);
	}
	else if (action.type = actions.BREAK_TIMER_START) {
		start.start = true;
		state.breakTimeRemaining = (Date.now() + 60000)
	}
	else if (action.type = actions.FETCH_TIME) {
		state.selectedTime = action.time;
	}

	return state;
}



module.exports = settingsReducer;