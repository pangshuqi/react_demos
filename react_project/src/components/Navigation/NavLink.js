/**
 * Created by Administrator on 2016/12/29.
 */
// modules/NavLink.js
import React from 'react';
import { Link } from 'react-router';

export default class NavLink extends React.Component {
    render() {
        return <Link {...this.props} activeClassName="active" onlyActiveOnIndex={true}/>
    }
}
