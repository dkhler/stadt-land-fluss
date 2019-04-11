import { combineReducers } from 'redux'
import { letters } from './letters'
import { activeLetter } from './activeLetter'

/*
Things you should never do inside a reducer:
    Mutate its arguments;
    Perform side effects like API calls and routing transitions;
    Call non-pure functions, e.g. Date.now() or Math.random().

*/

export default combineReducers({
    letters,
    activeLetter
})