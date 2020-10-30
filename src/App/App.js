import React, { Component } from "react";
import { addCounter, subtractCounter } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.counter);

    return (
      <div>
        <p>counter: {this.props.counter}</p>
        <button onClick={this.props.addCounter}>Add</button>
        <button onClick={this.props.subtractCounter}>Subtract</button>
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
