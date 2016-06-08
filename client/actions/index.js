export const FLIP_CARD = 'FLIP_CARD'
export const SET_ACTIVE_CARD_ID = 'SET_ACTIVE_CARD_ID'

export const flipCard = (cardId) => ({
	type: FLIP_CARD,
	cardId,
})

export const setActiveCardId = (cardId) => ({
	type: SET_ACTIVE_CARD_ID,
	cardId,
})