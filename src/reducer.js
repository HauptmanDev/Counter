export const CHANGE_START_VALUE = "Counter/Reducer/CHANGE-START-VALUE";
export const CHANGE_MAX_VALUE = "Counter/Reducer/CHANGE-MAX-VALUE";
export const CHANGE_VALUE = "Counter/Reducer/CHANGE-VALUE";
export const RESET = "Counter/Reducer/RESET";


const initialState = {
    value: 0,
    start: 0,
    max: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_START_VALUE:
            return {
                ...state,
                start: action.newStartValue
            };
        case CHANGE_MAX_VALUE:
            return {
                ...state,
                max: action.newMaxValue
            };
        case CHANGE_VALUE:
            return {
                ...state,
                value: action.newValue
            };
        case RESET:
            return {
                ...state,
                value: action.startValue
            };
        default :
            return state
    }
};

export const changeStartValueAC = (newStartValue) => {
    return {
        type: CHANGE_START_VALUE,
        newStartValue: newStartValue
    }
};
export const changeMaxValueAC = (newMaxValue) => {
    return {
        type: CHANGE_MAX_VALUE,
        newMaxValue: newMaxValue
    }
};
export const changeValueAC = (newValue) => {
    return {
        type: CHANGE_VALUE,
        newValue: newValue
    }
};
export const resetAC = (startValue) => {
    return {
        type: RESET,
        startValue: startValue
    }
};

export default reducer;