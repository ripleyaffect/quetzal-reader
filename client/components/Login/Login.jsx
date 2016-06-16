import React from 'react'
import { connect } from 'react-redux'

import { setUsername } from '../../actions'

class Login extends React.Component {
	render() {
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.onSetUsername(this.usernameInput.value)
	}

	render() {
		return <form onSubmit={this.handleSubmit}>
			<input type="text" ref={c => this.usernameInput = c} />
			<input type="submit" value="Login" />
		</form>
	}
}


export default connect(state => state, { onSetUsername: setUsername })(Login)