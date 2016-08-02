import { keyBy } from 'lodash'
import { combineReducers } from 'redux'

// Reducers

export const ids = (state=null, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return action.books.map(book => book.id)
    default:
      return state
  }
}

export const byId = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return keyBy(action.books, 'id')
    default:
      return state
  }
}

export const fetching = (state=false, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return true
    case 'FETCH_BOOKS_SUCCESS':
    case 'FETCH_BOOKS_FAILURE':
      return false
    default:
      return state
  }
}

export const fetchingPages = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_BOOK_PAGES_REQUEST':
      return [...state, action.bookId]
    case 'FETCH_BOOK_PAGES_SUCCESS':
    case 'FETCH_BOOK_PAGES_FAILURE':
      return state.filter(id => id !== action.bookId)
    default:
      return state
  }
}

export default combineReducers({
  ids,
  byId,
  fetching,
  fetchingPages,
})

// Selectors
export const getBook = (state, id) => {
  return state.byId[id]
}
export const getBooks = (state, id) => {
  const ids = state.ids;
  if (!ids) {
    return null
  }
  return ids.map(id => getBook(state, id))
}
export const isFetching = (state) => {
  return state.fetching
}
export const isFetchingPages = (state, id) => {
  return state.fetchingPages.indexOf(id) > -1
}
