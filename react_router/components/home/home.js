/**
 * Created by Administrator on 2016/12/27.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav/nav'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div>
                <Nav />
                <h2 style={{textAlign:'center'}}>这是home</h2>
                <input type="text" placeholder="请输入用户名" ref="username"/>
                <input type="password" placeholder="请输入用密码" ref="password"/>
                <button onClick={this.login}>signIn</button>
            </div>

        );
    }

    login() {
        let params = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };
        $.post('../data/user.json', params, function (data) {
            console.log(data);
            if (params.username == data.users[0].username && params.password == data.users[0].password) {
                console.log('success');
                let token = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
                localStorage.token= 'token';
            }
        }.bind(this))
    }
}

export default Home;
