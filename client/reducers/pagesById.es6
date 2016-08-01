import { keyBy } from 'lodash'

import { PAGES_BY_BOOK_ID } from 'app/dummyData'

const DEFAULT_PAGES_BY_ID = {
  ...keyBy(PAGES_BY_BOOK_ID[1], 'id'),
  ...keyBy(PAGES_BY_BOOK_ID[2], 'id'),
  ...keyBy(PAGES_BY_BOOK_ID[3], 'id'),
}

export default (state=DEFAULT_PAGES_BY_ID, action) => {
  return state
}

export const getPage = (state, id) => {
  return state[id]
}
