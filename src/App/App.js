import React, { Component } from "react";
import { addCounter, subtractCounter } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.addToCounter = this.addToCounter.bind(this);
    this.subtractFromCounter = this.subtractFromCounter.bind(this);
  }

  addToCounter() {
    this.props.addCounter();
  }

  subtractFromCounter() {
    this.props.subtractCounter();
  }

  render() {
    console.log(this.props.counter);

    return (
      <div>
        <p>counter: {this.props.counter}</p>
        <button onClick={this.addToCounter}>Add</button>
        <button onClick={this.subtractFromCounter}>Subtract</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter()),
  subtractCounter: () => dispatch(subtractCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
