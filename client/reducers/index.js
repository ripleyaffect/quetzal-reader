import { combineReducers } from 'redux'
import { v4 } from 'uuid'

import { SEND_MESSAGE, SET_USERNAME } from '../actions'

const messages = (state=[], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.concat({
        id: v4(),
        content: action.content,
        username: action.username,
      })
    default:
      return state
  }
}

const username = (state=null, action) => {
  switch (action.type) {
    case SET_USERNAME: 
      return action.username
    default:
      return state
  }
}

export const appReducer = combineReducers({
  messages,
  username,
})
