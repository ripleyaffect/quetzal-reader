import _ from 'lodash'
import { combineReducers } from 'redux'

import { cells } from 'app/dummyData'

const cellsById = (state=_.keyBy(cells, 'id'), action) => {
  return state
}

const cellIds = (state=_.map(cells, cell => cell.id), action) => {
  return state
}

export const appReducer = combineReducers({
  cellsById,
  cellIds,
})

