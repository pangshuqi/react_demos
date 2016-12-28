/**
 * Created by Administrator on 2016/11/16.
 */
import React from 'react';
import {render} from 'react-dom';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [{text: '全部', num: 10}, {text: '待处理', num: 15}, {text: '已留位', num: 20}, {text: '已取消', num: 3}]
        };
        this.clear = this.clear.bind(this)
    }

    render() {
        return <div>
            <h1>Hello world</h1>
            <ul>
                {this.state.lists.map(function (list, index) {
                    let add = this.add.bind(this, index);
                    return <li key={index}>{list.text + ' ' + list.num}
                        <button onClick={add}>增加</button>
                    </li>
                }.bind(this))}
            </ul>
            <button onClick={this.clear} className="clear">清空列表</button>
            {/**
            <Order list={this.state.lists}/>
                **/}
        </div>
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({
                lists: [{text: '全部', num: 0}, {text: '待处理', num: 0}, {text: '已留位', num: 0}, {text: '已取消', num: 0}]
            })
        }.bind(this), 5000);
    }

    clear() {
        this.setState({
            lists: []
        })
    }

    add(index) {
        var i = index;
        var array = this.state.lists;
        array.forEach(function (list, index) {
            if (i == index) {
                list.num++;
            }
        });
        this.setState({
            list: array
        })
    }
}

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
    }

    render() {
        return <div>
            <table>
                <thead>
                <tr>
                    <th>订单种类</th>
                    <th>订单数量</th>
                </tr>
                </thead>
                <tbody>
                {this.renderTable()}
                </tbody>
            </table>
        </div>
    }

    renderTable() {
        var html = [];
        this.props.list.forEach(function (item, index) {
            console.log(item);
            html.push(<tr key={index}>
                <td>{item.text}</td>
                <td>{item.num}</td>
            </tr>);
        });
        return html;
    }
}

render(<Orders />, document.getElementById('container'));

