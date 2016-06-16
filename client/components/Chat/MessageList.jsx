import React from 'react'
import { connect } from 'react-redux'

const MessageList = ({ messages }) => {
  return <ul>
    {messages.map(message => <li key={message.id}>
      {message.username}: {message.content}
    </li>)}
  </ul>
}

export default connect(state => state)(MessageList)
