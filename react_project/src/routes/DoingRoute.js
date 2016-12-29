import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation/Nav';
import ListDoingMemos from '../components/ListDoingMemos/listDoingMemos';
import {
    deleteTodo,
    changeDoingToDone,
    changeDoingToTodo,
} from '../actions/action';
/*
 * @class DoingRoute `正在进行`组件
 */
class DoingRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, todoList} = this.props;
        return (
            <div>
                <ListDoingMemos
                    todoList={todoList}
                    onDel={index=>dispatch(deleteTodo(index))} onDoingToDone={index=>dispatch(changeDoingToDone(index))}
                    onDoingToTodo={index=>dispatch(changeDoingToTodo(index))}
                    />
            </div>
        );
    }
}
DoingRoute.propTypes = {
    todoList:PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string.isRequired,
    istodo: PropTypes.bool.isRequired,
    doing: PropTypes.bool.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
function mapStateToProps(state) {
    return {todoList: state.todoList};
}
export default connect(mapStateToProps)(DoingRoute);
