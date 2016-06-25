import { combineReducers } from 'redux'

import { FOCUS_CELL } from 'app/actions'

const focusedCellId = (state=null, action) => {
  switch (action.type) {
    case FOCUS_CELL:
      return action.cellId
    default:
      return state
  }
}

export const appReducer = combineReducers({
  focusedCellId,
})
