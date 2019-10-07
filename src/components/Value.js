import React from 'react';
import './Value.css'

class Value extends React.Component {
    render() {
        let classValue = this.props.state.value === this.props.state.max ? 'big' : 'small';
        return (
            <div>
                <span className={classValue}>{this.props.state.value}</span>
            </div>
        );
    }
}



export default Value;


