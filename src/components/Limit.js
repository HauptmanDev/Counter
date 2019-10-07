import React from 'react';
import './../App.css';


class Limit extends React.Component {

    state = {
        maxLimit: 10,
        startLimit: 0,
        statusSet: true,
        blockInputMax: false,
        blockInputStart: false
    };
    onMaxLimitButtonClick = (e) => {
        this.props.changeStatus(true);
        this.setState({
            statusSet: false
        });

        if (e.currentTarget.value < 1) {
            this.setState({
                maxLimit: +1,
                blockInputMax: true,
            })
        } else if (e.currentTarget.value <= this.state.startLimit) {
            this.setState({
                blockInputMax: true,
            })
        } else {
            this.setState({
                blockInputMax: false,
                maxLimit: +e.currentTarget.value,
            })
        }
    };
    onStartLimitButtonClick = (e) => {
        this.props.changeStatus(true);
        this.setState({
            statusSet: false
        });
        if (e.currentTarget.value < 0) {
            this.setState({
                startLimit: 0,
            })
        } else if (e.currentTarget.value >= this.state.maxLimit) {
            this.setState({
                blockInputStart: true,
            })
        } else {
            this.setState({
                blockInputStart: false,
                startLimit: +e.currentTarget.value,
            })
        }
    };
    onSetButtonClick = () => {
        debugger
        let newMaxLimit = this.state.maxLimit;
        let newStartLimit = this.state.startLimit;
        this.props.setValue(newMaxLimit, newStartLimit);
        this.props.changeStatus(false);
        this.setState({
            statusSet: true
        })
    };

    render() {
        let inputErrorMax = this.state.blockInputMax ? 'error' : '';
        let inputErrorStart = this.state.blockInputStart ? 'error' : '';
        return (
            <div className="limit">
                <br/>
                <span className='text'>Max value</span>
                <span className='text'>Start value</span>
                <br/>
                <input className={inputErrorMax} onChange={this.onMaxLimitButtonClick} value={this.state.maxLimit}
                       type='number' min={0}/>
                <input className={inputErrorStart} onChange={this.onStartLimitButtonClick} value={this.state.startLimit}
                       type='number' min={0}/>
                <br/>
                <button className='set' disabled={this.state.statusSet} onClick={this.onSetButtonClick}>Set</button>
            </div>
        );
    }
}

export default Limit


