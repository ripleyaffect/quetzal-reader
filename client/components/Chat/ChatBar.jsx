import React from 'react'
import { connect } from 'react-redux'

import { sendMessage } from '../../actions'

class ChatBar extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault()

		this.props.onSendMessage(this.props.username, this.chatInput.value)

		// Clear the chat
		this.chatInput.value = ''
	}

	render() {
		console.log(this.props.messages)
		return <form onSubmit={this.handleSubmit}>
			<input type="text" ref={c => this.chatInput = c} />
			<input type="submit" value="submit"/>
		</form>
	}
}

export default connect(state => state, { onSendMessage: sendMessage })(ChatBar)