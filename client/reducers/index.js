import { combineReducers } from 'redux'

import {
  FLIP_CARD,
  MARK_CARD_CORRECT,
  MARK_CARD_INCORRECT
} from '../actions'

const DEFAULT_CARDS_BY_ID = {
  1: {
    id: 1,
    front: 'What is your name?',
    back: 'Sir Thomas of Thinkalot'
  },
  2: {
    id: 2,
    front: 'What is your quest?',
    back: 'I seek the holy grail'
  },
  3: {
    id: 3,
    front: 'What is your favorite color?',
    back: 'Blue! No! Yelloooooooooooooowwwwww...'
  },
}

const cardsById = (state=DEFAULT_CARDS_BY_ID, action) => {
  return state
}

const activeCardIds = (state=[1, 2, 3], action) => {
  return state
}

const incorrectCardIds = (state=[], action) => {
  switch (action.type) {
    case MARK_CARD_INCORRECT:
      return state.concat(action.cardId)
    default:
      return state
  }
}

const activeCardId = (state=1, action) => {
  switch (action.type) {
    case MARK_CARD_CORRECT:
    case MARK_CARD_INCORRECT:
      return action.nextCardId || null
    default:
      return state
  }
}

const activeCardFlipped = (state=false, action) => {
  switch (action.type) {
    case FLIP_CARD:
      return true
    case MARK_CARD_CORRECT:
    case MARK_CARD_INCORRECT:
      return false
    default:
      return state
  }
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
  activeCardFlipped,
  cardsById,
  cardStacksById,
})
