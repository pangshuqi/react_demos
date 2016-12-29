/**
 * Created by Administrator on 2016/12/29.
 */

import { combineReducers } from 'redux';
import todoList from './todo';

const reducer = combineReducers({
    todoList
});

export default reducer;