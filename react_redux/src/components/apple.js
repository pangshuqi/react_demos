/**
 * Created by Administrator on 2016/12/27.
 */
import React,{Component,PropTypes} from 'react';
import {render} from 'react-dom';

export default class Apple extends Component {
    render() {
        return (
            <div class="apple_box">
                <div className="">
                    <h4>果篮</h4>
                    <h5>还剩？个</h5>
                </div>
                <div>
                    <p>
                        <span>拿苹果</span>
                        <span>已拿？个</span>
                    </p>
                    <p>
                        <span>吃苹果</span>
                        <span>已吃？个</span>
                    </p>
                </div>
            </div>
        )
    }
}