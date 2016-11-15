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

var reducer = function(state=initialState, action={}) {
	// var copyState = state || initialState;
	// state = Object.assign({}, copyState);
	const payload = {};
	switch (action.type) {
		case actions.SEND_TIME: 
			console.log('*****************', action.time);
			payload.selectedTime = action.time;
			break;
		case action.SELECT_IMAGE:
			payload.selectImage = actions.selectImage;
			break;
		case action.CHECK_OPTIONS:
			payload.checkedOptions = actions.checkedOptions
			break;
		case action.SELECT_MUSIC:
			payload.selectedMusic = actions.selectedMusic
			break;
		case action.CHANGE_TIME:
			payload.selectedTime = actions.selectedTime
			break;
		case action.WORK_TIMER_START:
			payload.workTimeRemaining = (Date.now() + 60000)
			break;
		case action.BREAK_TIMER_START:
			payload.breakTimeRemaining = (Date.now() + 60000)
			break;
		case action.FETCH_TIME:
			payload.selectedTime = actions.time
			break;
		default: 
			return state;
	}
	return Object.assign({}, state, payload);
}



module.exports = reducer;