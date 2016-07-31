
import { SET_ACTIVE_BOOK_ID } from 'app/actions'

export default (state=1, action) => {
  switch (action.type) {
    case SET_ACTIVE_BOOK_ID:
      return action.id
    default:
      return state
  }
}
