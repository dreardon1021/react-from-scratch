import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.addToCounter = this.addToCounter.bind(this);
    this.subtractFromCounter = this.subtractFromCounter.bind(this)
    this.state = {
      counter: 0
    };
  }

  addToCounter() {
    console.log("test");
    let addedCounter = this.state.counter + 1;
    this.setState({ counter: addedCounter });
  }

  subtractFromCounter() {
    console.log("test");
    let subtractedCounter = this.state.counter - 1;
    this.setState({ counter: subtractedCounter });
  }

  render() {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button onClick={this.addToCounter}>
          Add
        </button>
        <button onClick={this.subtractFromCounter}>
          Subtract
        </button>
      </div>
    );
  }
}

export default App;
