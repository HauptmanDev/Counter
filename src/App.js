import React from 'react';
import './App.css';
import Value from "./components/Value";
import IncReset from "./components/IncReset";
import Limit from "./components/Limit";
import {connect} from 'react-redux'
import {changeMaxValueAC, changeStartValueAC, changeValueAC, resetAC} from "./reducer";


class App extends React.Component {
    state = {
        status: false
    };
    // saveState = () => {
    //     // perevodim object as (v) string
    //     let stateAsString = JSON.stringify(this.state);
    //     // save nashy string in localStorage pod key 'our-state'
    //     localStorage.setItem("our-state", stateAsString)
    // };
    //
    // restoreState = (props) => {
    //     // objyavlyaem nash state startoviy
    //     let state = {};
    //     // schitivaem sohrann ranee string iz localStorage
    //     let stateAsString = localStorage.getItem("our-state");
    //     // а вдруг еще не было ни одного сохранения?? тогда будет null
    //     // если не null, огда превращаем строку в объект
    //     if (stateAsString != null) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     this.setState(state);
    // };

    addStep = () => {
        if (this.props.state.value < this.props.state.max) {
            this.props.addStep(this.props.state.value + 1)
        } else if (this.props.state.value >= this.props.state.max) {
            this.props.addStep(this.props.state.max)
        }
    };
    reset = () => {
        let startValue = this.props.state.start;
        this.props.reset(startValue)
    };
    setValue = (newMaxValue, newStartValue) => {
        this.props.changeStartValue(newStartValue);
        this.props.changeMaxValue(newMaxValue);
        if (this.props.state.value !== newStartValue) {
            this.props.changeValue(newStartValue)
        }
    };
    changeStatus = (status) => {
        this.setState({status: status})
    };

    render = () => {
        return (
            <div className="App">
                <div className="display">
                    <Value state={this.props.state}/>
                    <IncReset addStep={this.addStep} reset={this.reset} state={this.state}/>
                    <Limit changeStatus={this.changeStatus} setValue={this.setValue}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addStep(newValue) {
            const action = changeValueAC(newValue);
            dispatch(action)
        },
        reset(startValue) {
            const action = resetAC(startValue);
            dispatch(action)
        },
        changeStartValue(newStartValue) {
            const action = changeStartValueAC(newStartValue);
            dispatch(action)
        },
        changeMaxValue(newMaxValue) {
            const action = changeMaxValueAC(newMaxValue);
            dispatch(action)
        },
        changeValue(newValue) {
            const action = changeValueAC(newValue);
            dispatch(action)
        },
    }
};
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;