import io from 'socket.io-client'

const client = io()
client.on('message', message => {
  console.log(message)
})

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_USERNAME = 'SET_USERNAME'

export const sendMessage = (username, content) => {
  client.emit('message', { username, content })
  return {
    type: SEND_MESSAGE,
    content,
    username,
  }
}

export const setUsername = (username) => ({
  type: SET_USERNAME,
  username,
})
