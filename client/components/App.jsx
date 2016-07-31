import React from 'react'
import { connect } from 'react-redux'

import Reader from 'app/components/Reader'

const App = ({ children, message }) => {
  return <div className="app">
  	{children}
  </div>
}

export default connect(state => state)(App)
