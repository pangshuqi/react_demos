/**
 * Created by Administrator on 2016/12/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import NavLi from './navli';
import './nav.css'
let navLis = ["Home", "Story", "Travel"];

class NAvUl extends React.Component {
    render() {
        return (
            <ul>
                {
                    navLis.map(function (navLi, index) {
                        return <NavLi name={navLi} key={index}/>
                    })
                }
            </ul>
        );
    }
}

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div id="nav">
                    <NAvUl/>
                </div>
            </nav>
        )
    }
}

export default Nav;