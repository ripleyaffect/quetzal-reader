import { combineReducers } from 'redux'

const message = (state='Hello world', action) => {
  return state
}

export const appReducer = combineReducers({
  message
})
