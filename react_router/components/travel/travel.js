/**
 * Created by Administrator on 2016/12/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
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
        console.log(id);
    }
}

export default Travel;
