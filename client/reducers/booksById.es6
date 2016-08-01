import { keyBy } from 'lodash'

import { DUMMY_BOOKS } from 'app/dummyData'

export default (state=keyBy(DUMMY_BOOKS, 'id'), action) => {
  console.log(state)
  switch (action.type) {
    default:
      return state
  }
}

export const getBook = (state, id) => {
  return state[id]
}
