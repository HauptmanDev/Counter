import React from 'react';
import './App.css';
import Value from "./components/Value";
import IncReset from "./components/IncReset";
import Limit from "./components/Limit";


class App extends React.Component {
    state = {
        value: 0,
        max: 10,
        start: 0,
        status: false
    };
    addStep = () => {
        if (this.state.value < this.state.max) {
            this.setState({
                value: +this.state.value + 1

            });
            return
        } else if (this.state.value >= this.state.max) {
            this.setState({
                value: +this.state.max
            })
        }
    };
    reset = () => {
        let newValue = this.state.start;
        this.setState({
            value: +newValue
        });
    };
    set = (newMaxLimit, newStartLimit) => {
        this.setState({
            max: +newMaxLimit,
            start: +newStartLimit,
        });
        if (this.state.value !== newStartLimit) {
            this.setState({
                value: +newStartLimit
            })
        }
    };
    changeStatus = (status) => {
        this.setState({status: status})
    };

    render = () => {
        return (
            <div className="App">
                <Value state={this.state}/>
                <IncReset addStep={this.addStep} reset={this.reset} state={this.state}/>
                <Limit changeStatus={this.changeStatus} set={this.set}/>
            </div>
        );
    }
}

export default App;