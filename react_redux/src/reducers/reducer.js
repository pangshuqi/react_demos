/**
 * Created by Administrator on 2016/12/23.
 */
import { combineReducers } from 'redux';
import { ADD_NUMBER } from '../actions/actions';

function compute(state = {number: 0}, action) {
    console.log('action.number', action.number);
    const number = state.number;
    switch (action.type) {
        case ADD_NUMBER:
            return {
                number: number + 1
            };
        default:
            return state;
    }
}

const Reducer = combineReducers({
    compute
});

export default Reducer;