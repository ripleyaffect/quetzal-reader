export const SET_USERNAME = 'SET_USERNAME'

export const setUsername = (username) => {
	console.log(username)
	return {
		type: SET_USERNAME,
		username
	}
}