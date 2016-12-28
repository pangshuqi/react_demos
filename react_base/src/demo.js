/**
 * Created by Administrator on 2016/11/18.
 */
import React from 'react';
import {render} from 'react-dom';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [{text: '全部', num: 10}, {text: '待处理', num: 15}, {text: '已留位', num: 20}, {text: '已取消', num: 3}]
        };
        this.clear = this.clear.bind(this);
        this.add = this.add.bind(this);
        this.queryData = this.queryData.bind(this);
    }

    render() {
        return <div>
            <h1>hello world</h1>
            <ul className="">
                {this.state.lists.map(function (item, index) {
                    return <li key={index}>{item.text + '' + item.num}
                    </li>
                })}
            </ul>
            <input type="text" ref="text1"/>
            <button onClick={this.clear}>清空</button>
            <button onClick={this.add}>增加</button>
        </div>
    }

    clear() {
        this.setState({
            lists: []
        })
    }

    add() {
        let obj = {
            text:"已付款",
            num: 30
        };

        this.setState({
            lists: [obj]
        });
        console.log(this.refs.text1.value);
    }

    componentDidMount(){
        this.queryData();
    }

    queryData(){

    }

}

render(<Orders />, document.getElementById('container'));