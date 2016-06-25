import _ from 'lodash'
import { combineReducers } from 'redux'

import cellsById, * as fromCellsById from './cellsById'
import cellIds from './cellIds'

export const appReducer = combineReducers({
  cellsById,
  cellIds,
})

export const getCellById = (state, id) => {
  return fromCellsById.getCellById(state.cellsById, id)
}
