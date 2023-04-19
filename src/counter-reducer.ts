// counter-reducer.ts

export interface CounterState {
  count: number;
}

export type CounterAction =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
