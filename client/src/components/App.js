import React, { Component } from "react";
import { addCounter, subtractCounter, setCounter } from "../actions";
import { connect } from "react-redux";
import { getCounter, addToCounter, subtractFromCounter } from "../api/index.js";

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    getCounter()
    .then(data => this.props.setCounter(data))
  }

  render() {
    return(
      <div>
        <p>counter: {this.props.counter}</p>
        <button onClick={() => this.props.addCounter(this.props.counter)}>Add</button>
        <button onClick={() => this.props.subtractCounter(this.props.counter)}>Subtract</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: counter => dispatch(addCounter(counter)),
  subtractCounter: counter => dispatch(subtractCounter(counter)),
  setCounter: data => dispatch(setCounter(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
