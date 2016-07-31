
export const SET_ACTIVE_BOOK_ID = 'SET_ACTIVE_BOOK_ID'
export const SET_ACTIVE_PAGE_ID = 'SET_ACTIVE_PAGE_ID'

export const setActiveBookId = (id) => ({
  type: SET_ACTIVE_BOOK_ID,
  id,
})

export const setActivePageId = (bookId, id) => ({
  type: SET_ACTIVE_PAGE_ID,
  bookId,
  id,
})
