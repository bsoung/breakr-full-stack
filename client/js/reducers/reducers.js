import _ from 'lodash';

import { 
	TIMER_START,
	SET_USER,
	TIMER_COMPLETE

} from '../actions/actions';

const initialState = {
	timer: {
		total: null, 
		timeStarted: null, 
		timerType: null,
		complete: false
	},
	user: null
};

export default function (state=initialState, action={}) {
	switch (action.type) {

		case TIMER_START:
		  return _.merge({}, state, {
		    timer: {
		      total: action.seconds,
		      timeStarted: action.timeStarted,
		      timerType: action.timerType,
		      complete: false
		    },
		  });

		case SET_USER:
		  return _.merge({}, state, {
		    user: action.user
		  })

		case TIMER_COMPLETE:
		  return _.merge({}, state, {
		  	timer: {
		  		complete: true
		  	}
		  })

		default: 
			return state;
	}
}


