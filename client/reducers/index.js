import _ from 'lodash'
import { combineReducers } from 'redux'

import { cells } from 'app/dummyData'
import { CREATE_CELL } from 'app/actions'

const cellsById = (state=_.keyBy(cells, 'id'), action) => {
  switch (action.type) {
    case CREATE_CELL:
      return {
        ...state,
        [action.cell.id]: action.cell,
      }
    default:
      return state
  }
}

const cellIds = (state=_.map(cells, cell => cell.id), action) => {
  switch (action.type) {
    case CREATE_CELL:
      return state.concat(action.cell.id)
    default:
      return state
  }
}

export const appReducer = combineReducers({
  cellsById,
  cellIds,
})

