export const counter = (state = 0, action) => {
  console.log("reducer");
  switch (action.type) {
    case "ADD_COUNTER":
      let addedState = state++;
      return addedState;
    case "SUBTRACT_COUNTER":
      let subtractedState = state--;
      return subtractedState;
    default:
      return state;
  }
};
