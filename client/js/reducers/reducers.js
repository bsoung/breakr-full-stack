import _ from 'lodash';

import {
    TIMER_START,
    SET_USER,
    TIMER_COMPLETE,
    SET_STATS


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
            console.log("WHATS THE ACTION?", action)

            var workTime = (action.user == null) ? [0] : action.user.timer.work;
            var breakTime = (action.user == null) ? [0] : action.user.timer.breaks;

            return _.merge({}, state, {
                user: action.user,
                currentWorkTime: workTime,
                currentBreakTime: breakTime
            });

        case TIMER_COMPLETE:
            return _.merge({}, state, {
                timer: {
                    complete: true
                }
            });

        case SET_STATS:
            return _.merge({}, state, {
                currentWorkTime: action.work,
                currentBreakTime: action.breaks
            });

        default:
            return state;
    }
}
