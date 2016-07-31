import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import App from './App'
import configureStore from 'app/configureStore'
import routes from 'app/routes'

const store = configureStore()

export default () => {
  return <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
}
