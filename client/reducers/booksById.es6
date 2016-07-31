import assign from 'lodash/assign'

import { SET_ACTIVE_PAGE_ID } from 'app/actions'

const DUMMY_BOOKS_BY_ID = {
  1: {
    id: 1,
    title: 'A Short History of Short Histories',
    pageIds: [1, 4, 7],
    activePageId: 1,
  },
  2: {
    id: 2,
    title: 'JavaScript for People that Hate Themselves',
    pageIds: [2, 5, 8],
    activePageId: 2,
  },
  3: {
    id: 3,
    title: 'Riding the Megabus for Dummies',
    pageIds: [3, 6, 9],
    activePageId: 3,
  }
}

const setActivePageId = (state, bookId, id) => {
  const book = state[bookId]
  if (!book) {
    return state
  }
  const updatedBook = assign({}, book, { activePageId: id })
  return assign({}, state, { [bookId]: updatedBook })
}

export default (state=DUMMY_BOOKS_BY_ID, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE_ID:
      return setActivePageId(state, action.bookId, action.id)
    default:
      return state
  }
}

export const getBookById = (state, id) => {
  return state[id]
}
