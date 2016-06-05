import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {
	const { message } = props

	return <h1>{message}</h1>
}

export default connect(state => state)(App)