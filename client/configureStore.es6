import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { app } from './reducers'

const loggingMiddleware = (store) => (next) => (action) => {
  console.log(action)
  next(action)
  console.log(store.getState())
  console.log('=================')
}

export default () => {
  return createStore(app, {}, applyMiddleware(thunkMiddleware, loggingMiddleware))
}
