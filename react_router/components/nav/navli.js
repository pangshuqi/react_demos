/**
 * Created by Administrator on 2016/12/27.
 */

import React from 'react';
import {Link} from 'react-router';
class NavLi extends React.Component {
    render() {
        let linkTo = this.props.name == "Home" ? "/" : "/" + this.props.name;
        let activeClass = this.props.name == "Home" ? "" : "active";
        let num = (new Date() + Math.floor(Math.random() * 999999)).toString(36);
        return (
            <li key={num}>
                <Link to={linkTo} activeClassName={activeClass}>
                    {this.props.name}
                </Link>
            </li>
        );
    }
}

export default NavLi;