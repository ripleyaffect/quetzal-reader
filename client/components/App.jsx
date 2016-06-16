import React from 'react'
import { connect } from 'react-redux'

import Login from './Login'

const App = ({ username }) => {
  return <div className="app">
  	{!username && <Login />}
    {username && <h1>Welcome {username}</h1>}
  </div>
}

export default connect(({ username }) => ({ username }))(App) 