import React from 'react'
import { connect } from 'react-redux'

import Chat from './Chat'
import Login from './Login'

const App = ({ username }) => {
  return <div className="app">
  	{!username && <Login />}
    {username && <Chat />}
  </div>
}

export default connect(state => state)(App)
