/**
 * Created by Administrator on 2016/12/29.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Nav';
import {addTodo, search} from '../actions/action';

//import './reset.css';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {dispatch,todoList} = this.props;
        let allMemos = todoList.length;
        let todoNumber = 0,
            doingNumber = 0,
            doneNumber = 0;
        todoList.forEach((item) => {
            if (item.istodo) {
                todoNumber++;
            } else if (item.doing) {
                doingNumber++;
            } else {
                doneNumber++;
            }
        });
        return (
            <div>
                <Header todoList={todoList} onAdd={text => dispatch(addTodo(text))}
                        onSearch={text => dispatch(search(text))} onKeyUp={this.props.onKeyUp}/>
                <Navigation allMemos={allMemos} todoNumber={todoNumber} doingNumber={doingNumber}
                            doneNumber={doneNumber}/>
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        istodo: PropTypes.bool.isRequired,
        doing: PropTypes.bool.isRequired,
        done: PropTypes.bool.isRequired
    }).isRequired).isRequired
};
function mapStateToProps(state) {
    return {todoList: state.todoList};
}
export default connect(mapStateToProps)(App);
