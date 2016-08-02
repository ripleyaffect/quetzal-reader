import { combineReducers } from 'redux'

import books, * as fromBooks from './books'
import pages, * as fromPages from './pages'

export const app = combineReducers({
  books,
  pages,
})

// Books reducer selectors
export const getBook = (state, id) => {
  return fromBooks.getBook(state.books, id)
}
export const getBooks = (state) => {
  return fromBooks.getBooks(state.books)
}
export const isFetchingBooks = (state) => {
  return fromBooks.isFetching(state.books)
}
export const isFetchingBookPages = (state, bookId) => {
  return fromBooks.isFetchingPages(state.books, bookId)
}

// Page reducer selectors
export const getPage = (state, id) => {
  return fromPages.getPage(state.pages, id)
}
export const getBookPages = (state, bookId) => {
  return fromPages.getBookPages(state.pages, bookId)
}
export const getLastSeenPage = (state, bookId) => {
  return fromPages.getLastSeenPage(state.pages, bookId)
}
