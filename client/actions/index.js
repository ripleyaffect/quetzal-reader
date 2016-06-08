export const FLIP_CARD = 'FLIP_CARD'
export const MARK_CARD_INCORRECT = 'MARK_CARD_INCORRECT'
export const MARK_CARD_CORRECT = 'MARK_CARD_CORRECT'
export const SET_ACTIVE_CARD_ID = 'SET_ACTIVE_CARD_ID'
export const SET_ACTIVE_CARD_IDS = 'SET_ACTIVE_CARD_IDS'

export const flipCard = (cardId) => ({
	type: FLIP_CARD,
	cardId,
})

export const setActiveCardId = (cardId) => ({
	type: SET_ACTIVE_CARD_ID,
	cardId,
})

export const markCardCorrect = (cardId, nextCardId) => ({
	type: MARK_CARD_CORRECT,
	cardId,
	nextCardId,
})

export const markCardIncorrect = (cardId, nextCardId) => ({
	type: MARK_CARD_INCORRECT,
	cardId,
	nextCardId,
})

export const setActiveCardIds = (cardIds) => ({
	type: SET_ACTIVE_CARD_IDS,
	cardIds,
})