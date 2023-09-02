import { render } from "@testing-library/react";
import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 10,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 10,
    });
  };

  render() {
    return (
      <>
        <u>
          <div
            style={{
              textAlign: "center",
              padding: 10,
            }}
          >
            ...Increment By Class Component...
          </div>
        </u>
        <div>Count:{this.state.count}</div>
        <button onClick={this.incrementCount}>INCREMENT</button>
        <button onClick={this.decrementCount}>DECREMENT</button>
      </>
    );
  }
}
export default Counter;
