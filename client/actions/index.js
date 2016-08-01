export const SET_LAST_SEEN_PAGE_ID = 'SET_LAST_SEEN_PAGE_ID'

export const setLastSeenPageId = (bookId, id) => ({
  type: SET_LAST_SEEN_PAGE_ID,
  bookId,
  id,
})
