import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import "./Index.css";

const Counter = () => {
    let counter = useSelector((state) => state.counter);
    let visible = useSelector((state) => state.visible);
    let dispatch = useDispatch();

    let incrementActionHandler = () => {
        dispatch({type : "Increment"});
    };

    let decrementActionHandler = () => {
        dispatch({ type: "Decrement"});
    };

    let incrementByValueHandler = (value) => {
        dispatch({type: 'IncrementByValue', value: value})
    };

    let toggleVisiblitiyHandler = () => {
        dispatch({type: "ToggleVisibility"})
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {visible && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementActionHandler}>Increment</button>
                <button onClick={() => incrementByValueHandler(10)}>Increment by 10</button>
                <button onClick={decrementActionHandler}>Decrement</button>
            </div>
            <button onClick={toggleVisiblitiyHandler}>Toggle Counter</button>
        </main>
    );
}

export default Counter;