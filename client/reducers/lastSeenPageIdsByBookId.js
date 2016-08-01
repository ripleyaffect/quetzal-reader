import { SET_LAST_SEEN_PAGE_ID } from 'app/actions'

export default (state={}, action) => {
  switch(action.type) {
    case SET_LAST_SEEN_PAGE_ID:
      return {
        ...state,
        [action.bookId]: action.id,
      }
    default:
      return state
  }
}

export const getLastSeenPageId = (state, bookId) => {
  return state[bookId]
}
