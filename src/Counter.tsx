// Counter.tsx

import React, { useReducer } from "react";
import { CounterState, CounterAction, counterReducer } from "./counter-reducer";

const initialState: CounterState = {
  count: 0,
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = (value: number) =>
    dispatch({ type: "increment", payload: value });
  const decrement = (value: number) =>
    dispatch({ type: "decrement", payload: value });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => increment(5)}>Increment by 5</button>
      <button onClick={() => decrement(5)}>Decrement by 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
