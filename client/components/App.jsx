import React from 'react'
import { connect } from 'react-redux'

const App = ({ message }) => {
  return <div className="app">
    <h1>{message}</h1>
  </div>
}

export default connect(state => state)(App)