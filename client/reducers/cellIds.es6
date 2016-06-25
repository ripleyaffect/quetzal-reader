import _ from 'lodash'

import { CREATE_CELL } from 'app/actions'
import { cells } from 'app/dummyData'

export default (state=_.map(cells, cell => cell.id), action) => {
  switch (action.type) {
    case CREATE_CELL:
      return state.concat(action.cell.id)
    default:
      return state
  }
}
