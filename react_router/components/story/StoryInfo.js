/**
 * Created by Administrator on 2016/12/28.
 */
import React from 'react';
import { render } from 'react-dom';

class StoryInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <h3 style={{textAlign:'center',marginTop:'25px'}}>这是id为{this.props.params.id}的故事详情{this.props.params.name}</h3>
            </div>
        )
    }

    componentDidMount() {
        let id = this.props.params.id;
        console.log(id)
    }
}

export default StoryInfo;