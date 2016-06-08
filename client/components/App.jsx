import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {
	const { activeCardStackId } = props

	return <h1>{activeCardStackId}</h1>
}

export default connect(state => state)(App)