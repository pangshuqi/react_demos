/**
 * Created by Administrator on 2016/12/23.
 */
import React,{Component,PropTypes} from 'react';
import '../style/compute.css'

export default class Compute extends Component {

    render() {
        const {value} = this.props;
        return (
            <div className="compute_box">
                <span>{value}</span>
                <button onClick={(value)=>this.props.onAddClick(value)}>test+=</button>
            </div>
        )
    }
}

Compute.propTypes = {
    onAddClick: PropTypes.func.isRequired
}