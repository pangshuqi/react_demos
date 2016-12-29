import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation/Nav';
import ListTodoMemos from '../components/ListTodoMemos/listTodoMemos';
import {
    deleteTodo,
    changeTodoToDoing,
} from '../actions/action';
/*
 * @class TodoRoute `新建事项`组件
 */
class TodoRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, todoList} = this.props;
        return (
            <div>
                <ListTodoMemos
                    todoList={todoList}
                    onDel={index=>dispatch(deleteTodo(index))}  onTodoToDoing={index=>dispatch(changeTodoToDoing(index))}
                    />
            </div>
        );
    }
}
TodoRoute.propTypes = {
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
export default connect(mapStateToProps)(TodoRoute);
