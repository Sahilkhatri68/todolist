// The useReducer hook is used to manage more complex state logic when useState might not be sufficient.
//useReducer hook takes two arguments: a reducer function and an initial state value.
// It returns the current state and a dispatch function that allows you to dispatch actions to update the state based on the specified action type.

//Parameters:
// reducer (Function): A function that takes two arguments: the current state and an action. It returns the new state based on the action type.
// initialState (Any): The initial state value that your component will start with.

// Return Values:
// state (Any): The current state value, which can be of any data type.
// dispatch (Function): A function that allows you to dispatch actions to update the state. Actions are typically objects with a type property that specifies the action type and additional data as needed.
import React, { useReducer } from "react";
const initalstate = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducer_exp() {
  const [state, dispatch] = useReducer(reducer, initalstate);
  return (
    <div>
      <h3>UseReducer_exp</h3>
      <div>Count:{state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default UseReducer_exp;
