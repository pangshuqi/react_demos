/**
 * Created by Administrator on 2016/12/27.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav/nav'
class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <h2 style={{textAlign:'center'}}>这是home</h2>
            </div>

        );
    }
}

export default Home;
