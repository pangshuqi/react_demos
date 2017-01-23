/**
 * Created by Administrator on 2017/1/22.
 */
import React from 'react'
import { render } from 'react-dom';
import City from './cityList'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.clickBody = this.clickBody.bind(this);
    }

    render() {
        return (
            <div onClick={this.clickBody} style={{overflow:'hidden'}}>
                <div style={{width:'185px'}}>
                    <City
                        class="test"
                        ref="test"
                    />
                </div>
            </div>
        )
    }

    clickBody(event) {
        var e = event || window.event;
        e.stopPropagation();
    }
}

render(<Test />, document.querySelector('#container'));