export const counter = (state = 0, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      let addedState = state + 1;
      return addedState;
    case "SUBTRACT_COUNTER":
      let subtractedState = state - 1;
      return subtractedState;
    default:
      return state;
  }
};
