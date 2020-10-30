export const addCounter = counterChangeType => ({
  type: 'ADD_COUNTER',
  counterChangeType
})

export const subtractCounter = counterChangeType => ({
  type: 'SUBTRACT_COUNTER',
  counterChangeType
})