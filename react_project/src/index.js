/**
 * Created by Administrator on 2016/12/29.
 */
import React from 'react';
import { render } from 'react-dom';
import {Route, IndexRoute, hashHistory, Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './container/App';
import AllMemosRoute from './routes/AllMemosRoute';
import TodoRoute from './routes/TodoRoute';
import DoingRoute from './routes/DoingRoute';
import DoneRoute from './routes/DoneRoute';

import './index.css';

import configureStore from './stores/store';
const store = configureStore();
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={AllMemosRoute}/>
                <Route path="/todo" component={TodoRoute}/>
                <Route path="/doing" component={DoingRoute}/>
                <Route path="/done" component={DoneRoute}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container'));