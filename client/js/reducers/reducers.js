import { 
	WORK_TIMER_START, 
	BREAK_TIMER_START, 
	SET_USER, 
	LOGOUT_USER,
	GUEST_LOGIN
} from '../actions/actions';

const initialState = {
	workTimeRemaining: null,
	breakTimeRemaining: null,
	user: null
};

export default function (state=initialState, action={}) {
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
			console.log("this is action user", action.user)
			break;

		case LOGOUT_USER:
			payload.user = null
			console.log('payload', payload.user)
			break;

		default: 
			return state;
	}
	console.log("state is", state)

	return Object.assign({}, state, payload);
}


