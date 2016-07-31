import { createStore } from 'redux'

import { app } from './reducers'

export default () => {
  const store = createStore(app)

  return store
}
