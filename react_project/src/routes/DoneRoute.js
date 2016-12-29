import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from '../components/Navigation/Nav';
import ListDoneMemos from '../components/ListDoneMemos/listDoneMemos';
import {
    deleteTodo,
    changeDoneToDoing,
} from '../actions/action';
/*
 * @class DoneRoute `已完成`组件
 */
class DoneRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, todoList} = this.props;
        return (
            <div>
                <ListDoneMemos
                    todoList={todoList}
                    onDel={index=>dispatch(deleteTodo(index))} onDoneToDoing={index=>dispatch(changeDoneToDoing(index))}/>
            </div>
        );
    }
}
DoneRoute.propTypes = {
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
export default connect(mapStateToProps)(DoneRoute);
