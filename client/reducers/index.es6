import { combineReducers } from 'redux'

import activeBookId from './activeBookId'
import bookIds from './bookIds'
import booksById, * as fromBooksById from './booksById'
import pagesById, * as fromPagesById from './pagesById'

export const app = combineReducers({
  activeBookId,
  bookIds,
  booksById,
  pagesById,
})

export const getBookById = (state, id) => {
  return fromBooksById.getBookById(state.booksById, id)
}

export const getPageById = (state, id) => {
  return fromPagesById.getPageById(state.pagesById, id)
}

export const getActiveBook = (state) => {
  return getBookById(state, state.activeBookId)
}

export const getActivePage = (state) => {
  const activeBook = getActiveBook(state)
  return getPageById(state, activeBook.activePageId)
}
