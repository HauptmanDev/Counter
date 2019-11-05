import React from 'react';
import './../App.css'

class IncReset extends React.Component {

    render  () {
        return (
            <div className='componentIncReset'>
                <button className='incReset' disabled={this.props.state.status} onClick={this.props.addStep}>Inc</button>
                <button className='incReset' disabled={this.props.state.status} onClick={this.props.reset}>Reset</button>
            </div>
        );
    }
}

export default IncReset;

