export const addCounter = counter => ({
  type: "ADD_COUNTER",
  counter
});

export const subtractCounter = counter => ({
  type: "SUBTRACT_COUNTER",
  counter
});

export const setCounter = (data) => ({
  type: "SET_COUNTER",
  data
});
