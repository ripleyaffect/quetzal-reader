import React from 'react'
import { connect } from 'react-redux'

import Notebook from 'app/components/Notebook'

const App = () => {
  return <div className="app">
  	<Notebook />
  </div>
}

export default connect(state => state)(App)
