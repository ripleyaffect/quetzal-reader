import { combineReducers } from 'redux'

import bookIds from './bookIds'
import booksById, * as fromBooksById from './booksById'
import lastSeenPageIdsbyBookId, * as fromLastSeenPageIdsbyBookId from './lastSeenPageIdsbyBookId'
import pagesById, * as fromPagesById from './pagesById'

export const app = combineReducers({
  bookIds,
  booksById,
  lastSeenPageIdsbyBookId,
  pagesById,
})

export const getBook = (state, id) => {
  console.log(state, id)
  return fromBooksById.getBook(state.booksById, id)
}

export const getPage = (state, id) => {
  return fromPagesById.getPage(state.pagesById, id)
}

export const getLastSeenPageId = (state, bookId) => {
  return fromLastSeenPageIdsbyBookId.getLastSeenPageId(state.lastSeenPageIdsbyBookId, bookId)
}
