/**
 * Created by Administrator on 2016/12/20.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import Nav from '../components/nav/nav'
import Home from '../components/home/home'
import Story from '../components/story/story'
import Travel from '../components/travel/travel';
import StoryInfo from '../components/story/StoryInfo';

import './reset.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/Story" component={Story}/>
                <StoryInfo path="/StoryInfo/:id" component={StoryInfo}/>
                <Route path="/Travel" component={Travel}/>
            </Route>
        </Router>
    ), document.getElementById('container')
);