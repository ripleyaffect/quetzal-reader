
const DEFAULT_PAGES_BY_ID = {
  1: {
    id: 1,
    title: 'Hello World',
  },
  2: {
    id: 2,
    title: 'Beginning Again',
  },
  3: {
    id: 3,
    title: 'Pants on Fire',
  },
  4: {
    id: 4,
    title: 'Hello World two',
  },
  5: {
    id: 5,
    title: 'Beginning Again two',
  },
  6: {
    id: 6,
    title: 'Pants on Fire two',
  },
  7: {
    id: 7,
    title: 'Hello World three',
  },
  8: {
    id: 8,
    title: 'Beginning Again three',
  },
  9: {
    id: 9,
    title: 'Pants on Fire three',
  }
}

export default (state=DEFAULT_PAGES_BY_ID, action) => {
  return state
}

export const getPageById = (state, id) => {
  return state[id]
}
