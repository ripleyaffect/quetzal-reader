import React from 'react'

import ChatBar from './ChatBar'
import MessageList from './MessageList'

export default () => <div className="chat">
	<MessageList />
	<ChatBar />
</div>