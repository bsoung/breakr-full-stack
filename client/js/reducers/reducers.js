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
	console.log("action type:    ", action.type);
	switch (action.type) {
		case actions.SEND_TIME: 
			console.log('*****************', action.time);
			payload.selectedTime = action.time;
			break;
		case actions.SELECT_IMAGE:
			payload.selectImage = actions.selectImage;
			break;
		case actions.CHECK_OPTIONS:
			payload.checkedOptions = actions.checkedOptions
			break;
		case actions.SELECT_MUSIC:
			payload.selectedMusic = actions.selectedMusic
			break;
		case actions.CHANGE_TIME:
			payload.selectedTime = actions.selectedTime
			break;
		case actions.WORK_TIMER_START:
			payload.workTimeRemaining = (Date.now() + 60000)
			break;
		case actions.BREAK_TIMER_START:
		console.log("in reducer BreakTImerStart")
			payload.breakTimeRemaining = (Date.now() + 60000)
			break;
		case actions.FETCH_TIME:
			payload.selectedTime = actions.time
			break;
		default: 
			return state;
	}
	return Object.assign({}, state, payload);
}



module.exports = reducer;