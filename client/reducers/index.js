import { combineReducers } from 'redux'

const cardsById = (state={}, action) => {
  return {
    1: {
      front: 'What is your name',
      back: 'Thomas'
    },
    2: {
      front: 'What is your quest',
      back: 'I seek the holy grail'
    },
    3: {
      front: 'What is your favorite color',
      back: 'Blue! Wait no! Yelloooooooooooooowwwwww'
    },
  }
}

const activeCardId = (state=1, action) => {
  return state
}

const cardStacksById = (state={}, action) => {
  return {
    1: {
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
