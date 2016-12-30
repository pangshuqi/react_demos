/**
 * Created by Administrator on 2016/12/23.
 */
import React,{ Component,PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import {addNumber} from '../actions/actions';
import Compute from '../components/compute';

class App extends Component {
    render() {
        return (
            <div>
                <Compute value={this.props.value} onAddClick={ number => this.props.dispatch(addNumber(number)) }/>
            </div>
        )
    }
}

function number(state) {
    console.log('number state', state);
    return {value: state.compute.number};
}
export default connect(number)(App);