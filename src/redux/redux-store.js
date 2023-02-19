import { createStore } from "redux";

// Redux Function 
let reducerFunction = (state = {counter : 0, visible: true}, action) => {
    if (action.type == 'Increment') {
        return {
            counter: state.counter + 1,
            visible: state.visible,
        };
    }
    if(action.type == 'Decrement') {
        return { counter: state.counter - 1,
            visible: state.visible,

        };
    }
    if(action.type == "IncrementByValue") {
        return {
            counter: state.counter + action.value,
            visible: state.visible,
        };
    };
    if (action.type == "ToggleVisibility") {
        return {
            visible : !state.visible,
            counter: state.counter,
        };
    }
    return state;
};
// Redux Store

export const reduxStore = createStore(reducerFunction);