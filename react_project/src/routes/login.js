/**
 * Created by Administrator on 2016/12/30.
 */
import React,{Component,PropTypes} from 'react';

class LogIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {dispatch} = this.props;
        return (
            <div>
                <button onclick={dispatch(login)}>登录</button>
            </div>
        )
    }
}