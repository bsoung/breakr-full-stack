import _ from 'lodash';

import {
    TIMER_START,
    SET_USER,
    TIMER_COMPLETE,
    SET_WORK,
    SET_BREAKS


} from '../actions/actions';

const initialState = {
    timer: {
        total: null,
        timeStarted: null,
        timerType: null,
        complete: false
    },
    currentWorkTime: [0],
    currentBreakTime: [0],
    user: null
};

export default function(state = initialState, action = {}) {
    const stateClone = _.cloneDeep(state);

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

        	if (action.user == null) {
	        	return _.merge({}, state, {
	                user: action.user,
	                currentWorkTime: null,
	                currentBreakTime: null
	            });
        	}

            return _.merge({}, state, {
                user: action.user,
                currentWorkTime: action.user.timer.work,
                currentBreakTime: action.user.timer.breaks
            });

        case TIMER_COMPLETE:
            return _.merge({}, state, {
                timer: {
                    complete: true
                }
            });

        case SET_WORK:
            console.log(action, "work")

            return _.merge({}, state, {
                currentWorkTime: action.work,
            });

        case SET_BREAKS:
            console.log(action, "breaks")

            return _.merge({}, state, {
                currentBreakTime: action.breaks,
            });

        default:
            return state;
    }
}
