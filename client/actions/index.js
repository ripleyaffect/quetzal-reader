export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_USERNAME = 'SET_USERNAME'

export const sendMessage = (username, content) => ({
	type: SEND_MESSAGE,
	content,
	username,
})

export const setUsername = (username) => ({
	type: SET_USERNAME,
	username,
})