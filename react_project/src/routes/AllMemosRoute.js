import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ListTodoMemos from '../components/ListTodoMemos/listTodoMemos';
import ListDoingMemos from '../components/ListDoingMemos/listDoingMemos';
import ListDoneMemos from '../components/ListDoneMemos/listDoneMemos';
import {
    deleteTodo,
    changeTodoToDoing,
    changeDoingToDone,
    changeDoingToTodo,
    changeDoneToDoing,
} from '../actions/action';
/*
 * @class AllMemosRoute `全部事项`组件
 */
class AllMemosRoute extends Component {
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
                <ListDoingMemos
                    todoList={todoList}
                    onDel={index=>dispatch(deleteTodo(index))} onDoingToDone={index=>dispatch(changeDoingToDone(index))}
                    onDoingToTodo={index=>dispatch(changeDoingToTodo(index))}
                    />
                <ListDoneMemos
                    todoList={todoList}
                    onDel={index=>dispatch(deleteTodo(index))} onDoneToDoing={index=>dispatch(changeDoneToDoing(index))}/>
            </div>
        );
    }
}
AllMemosRoute.propTypes = {
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
export default connect(mapStateToProps)(AllMemosRoute);
