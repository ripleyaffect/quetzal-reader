import * as api from 'app/api'
import * as selectors from 'app/reducers'

export const setLastSeenPageId = (bookId, id) => ({
  type: 'SET_LAST_SEEN_PAGE_ID',
  bookId,
  id,
})

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_BOOKS_REQUEST' })
    api.getBooks((books) => dispatch({ type: 'FETCH_BOOKS_SUCCESS', books }))
  }
}
export const fetchBooksIfNeeded = () => {
  return (dispatch, getState) => {
    if (
        selectors.getBooks(getState()) ||
        selectors.isFetchingBooks(getState())) {
      return
    }
    dispatch(fetchBooks())
  }
}

export const fetchBookPages = (bookId) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_BOOK_PAGES_REQUEST', bookId })
    api.getBookPages(bookId, (pages) => dispatch({
      type: 'FETCH_BOOK_PAGES_SUCCESS',
      bookId,
      pages,
    }))
  }
}
export const fetchBookPagesIfNeeded = (bookId) => {
  return (dispatch, getState) => {
    if (
        selectors.getBookPages(getState(), bookId) ||
        selectors.isFetchingBookPages(getState(), bookId)) {
      return;
    }
    dispatch(fetchBookPages(bookId))
  }
}
