/**
 * Created by Administrator on 2016/12/23.
 */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './container/app';
import Reducer from './reducers/reducer';

let store = createStore(Reducer);
render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('container'));