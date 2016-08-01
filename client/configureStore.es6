import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { app } from './reducers'

export default () => {
  return createStore(app, {}, applyMiddleware(thunkMiddleware))
}
