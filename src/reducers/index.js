import { combineReducers } from 'redux';
import { counter } from './changeCounter'

const rootReducer = combineReducers({
  counter
})

export default rootReducer