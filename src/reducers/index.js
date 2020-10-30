import { combineReducers } from 'redux';
import { changeCounter } from './changeCounter'

const rootReducer = combineReducers({
  changeCounter
})

export default rootReducer