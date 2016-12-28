/**
 * Created by Administrator on 2016/12/27.
 */
import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router';
import './story.css';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeList: [
                {id: 1, name: '鬼吹灯'},
                {id: 9, name: '神墓'},
                {id: 15, name: '盗墓笔记'}
            ]
        };
    }

    render() {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>这是story list</h2>
                <ul id="storyList">
                    {this.state.storeList.map(function (item, index) {
                        return <li key={index} name={item.name}><Link to={"/StoryInfo/" + item.id}>{item.name}</Link></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Story;
