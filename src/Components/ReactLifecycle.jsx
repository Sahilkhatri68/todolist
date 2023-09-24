// 1. Initialization:

// constructor(props): This is where you initialize the component's state and bind methods if needed.
// Example:
import React, { Component } from "react";

export default class ReactLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
      isLoading: true,
    };
  }
  // componentdidmount code
  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: "Hello",
        isLoading: false,
      });
    }, [3000]);
  }
  render() {
    const { data, isLoading } = this.state;

    return (
      <div>
        <h3>ReactLifecycle</h3>
        <h5>Component with componentDidMount</h5>
        <p>Data : {isLoading === true ? <>Loading...</> : data}</p>
      </div>
    );
  }
}

// 2. Mounting: componentDidMount()

// componentWillMount (deprecated): Called before the component is mounted to the DOM. Considered legacy, and you should use componentDidMount instead.

// render(): Responsible for rendering the component's UI. Must return JSX.

// Example:
// render() {
//   return <div>{this.state.count}</div>;
// }
