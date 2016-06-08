import { combineReducers } from 'redux'

import { FLIP_CARD } from '../actions'

const DEFAULT_CARDS_BY_ID = {
  1: {
    id: 1,
    front: 'What is your name',
    back: 'Thomas'
  },
  2: {
    id: 2,
    front: 'What is your quest',
    back: 'I seek the holy grail'
  },
  3: {
    id: 3,
    front: 'What is your favorite color',
    back: 'Blue! Wait no! Yelloooooooooooooowwwwww'
  },
}

const cardsById = (state=DEFAULT_CARDS_BY_ID, action) => {
  switch (action.type) {
    case FLIP_CARD:
      return Object.assign({}, state, {
        [action.cardId]: Object.assign({}, state[action.cardId], {
          flipped: !state[action.cardId].flipped
        })
      })
    default:
      return state
  }
}

const activeCardId = (state=1, action) => {
  return state
}

const cardStacksById = (state={}, action) => {
  return {
    1: {
      title: 'Monty JavaScript',
      cards: [1, 2, 3]
    }
  }
}

const activeCardStackId = (state=1, action) => {
  return state
}

export const appReducer = combineReducers({
  activeCardId,
  activeCardStackId,
  cardsById,
  cardStacksById,
})
