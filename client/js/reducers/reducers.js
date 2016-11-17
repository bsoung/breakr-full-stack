import { WORK_TIMER_START, BREAK_TIMER_START, SET_USER } from '../actions/actions';

const initialState = {
	selectedImage: null,
	checkedOptions: [],
	account: null,
	selectedMusic: null,
	selectedTime: 0,
	start: false,
	workTimeRemaining: null,
	breakTimeRemaining: null,
	user: null
};

export default function (state=initialState, action={}) {
	// var copyState = state || initialState;
	// state = Object.assign({}, copyState);
	const payload = {};

	switch (action.type) {

		case WORK_TIMER_START:
			payload.workTimeRemaining = (Date.now() + (action.minutes * 1000))
			break;

		case BREAK_TIMER_START:
			payload.breakTimeRemaining = (Date.now() + (action.minutes * 1000))
			break;

		case SET_USER:
			payload.user = action.user
			break;

		default: 
			return state;
	}
	return Object.assign({}, state, payload);
}


