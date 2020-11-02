import { getCounter, addToCounter, subtractFromCounter } from '../api/index'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      addToCounter()
      return action.counter + 1;
    case "SUBTRACT_COUNTER":
      subtractFromCounter()
      return state - 1;
    case "SET_COUNTER":
      state = action.data.counter
      return state
    default:
      console.log('default')
      return state;
  }
};
