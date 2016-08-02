import { keyBy } from 'lodash'
import { combineReducers } from 'redux'

// Reducers

const byId = (state={}, action) => {
  switch(action.type) {
    case 'FETCH_BOOK_PAGES_SUCCESS':
      return {
        ...state,
        ...keyBy(action.pages, 'id'),
      }
    default:
      return state
  }
}

const idsByBookId = (state={}, action) => {
  switch(action.type) {
    case 'FETCH_BOOK_PAGES_SUCCESS':
      return {
        ...state,
        [action.bookId]: action.pages.map(page => page.id),
      }
    default:
      return state
  }
}

const lastSeenByBookId = (state={}, action) => {
  switch(action.type) {
    case 'SET_LAST_SEEN_PAGE_ID':
      return {
        ...state,
        [action.bookId]: action.id,
      }
    default:
      return state
  }
}

export default combineReducers({
  byId,
  idsByBookId,
  lastSeenByBookId,
})

// Selectors
export const getPage = (state, id) => {
  return state.byId[id]
}
export const getBookPages = (state, bookId) => {
  const ids = state.idsByBookId[bookId]
  if (!ids) {
    return
  }
  return ids.map(id => getPage(state, id))
}
export const getLastSeenPage = (state, bookId) => {
  return getPage(state, state.lastSeenByBookId[bookId])
}
