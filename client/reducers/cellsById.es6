import _ from 'lodash'

import { CREATE_CELL } from 'app/actions'
import { cells } from 'app/dummyData'

export default (state=_.keyBy(cells, 'id'), action) => {
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

export const getCellById = (state, id) => {
	return state[id] || { error: `No cell with id ${id}` }
}
