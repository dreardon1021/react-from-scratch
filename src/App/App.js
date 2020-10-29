import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
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
    let subtractedCounter = this.state.counter - 1;
    this.setState({ counter: subtractedCounter });
  }

  render() {
    return (
      <div>
        <p class="counter-count">{this.state.counter}</p>
        <button onClick={() => this.addToCounter(e)} className="counter-button">
          Add
        </button>
        <button
          onClick={() => this.subtractFromCounter(e)}
          className="counter-button"
        >
          Subtract
        </button>
      </div>
    );
  }
}

export default App;
