import { combineReducers } from 'redux'

import { SET_USERNAME } from '../actions'

const username = (state=null, action) => {
  switch (action.type) {
    case SET_USERNAME: 
      return action.username
    default:
      return state
  }
}

export const appReducer = combineReducers({
  username
})
