/**
 * Created by Administrator on 2016/12/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import Nav from '../nav/nav';

import './travel.css';

class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: [
                {id: 1, text: '辽宁'},
                {id: 2, text: '北京'},
                {id: 3, text: '上海'},
                {id: 4, text: '西藏'}
            ]
        }
    }

    render() {
        return (
            <div>
                <Nav />
                <h2 style={{textAlign:'center'}}>这是trave</h2>
                <div className="btns">
                    {
                        this.state.city.map(function (item, index) {
                            let on_click = this.on_click.bind(this, item.id);
                            return <button onClick={on_click} key={index}>{item.text}</button>
                        }.bind(this))
                    }
                </div>
            </div>
        );
    }


    on_click(id) {
        if (id === 1) {
            hashHistory.push("/StoryInfo/" + id);
        } else {
            alert('当前城市id为'+id+',点击辽宁可跳转到故事详情')
        }

    }
}

export default Travel;
