/**
 * Created by Administrator on 2017/1/22.
 */
import React from 'react'
import { render } from 'react-dom';
import City from './cityList'

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <City />
            </div>
        )
    }
}

render(<Test />, document.querySelector('#container'));