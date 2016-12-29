/**
 * Created by Administrator on 2016/12/29.
 */
import { createStore } from 'redux';
import reducer from '../reducers/reducer';
export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
}