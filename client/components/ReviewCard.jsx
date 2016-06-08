import React from 'react'
import { connect } from 'react-redux'

import { setActiveCardIds } from '../actions'

const ReviewCard = ({
  activeCardStackIds,
  incorrectCardIds,
  missedSomeCards,
  missedAllCards,
  onSetActiveCardIds,
}) => {
  return <div className="card">
    <h1 className="card-title">Review</h1>
    <div className="missed-cards">
      You {
        !missedSomeCards ? "didn't miss any" : `missed ${incorrectCardIds.length}`
      } card{
        incorrectCardIds.length == 1 ? '' : 's'
      }!
    </div>
    {missedSomeCards && !missedAllCards && <button
        className="button__primary review-missed-cards-button"
        onClick={() => onSetActiveCardIds(incorrectCardIds) }>
      Review missed card{incorrectCardIds.length == 1 ? '' : 's'}
    </button>}
    <button
        className={`review-all-cards-button ${
          (!missedSomeCards || missedAllCards) ? 'button__primary' : 'button__secondary'}`}
        onClick={() => onSetActiveCardIds(activeCardStackIds) }>
      Review {missedAllCards ? 'cards again' : 'all cards in this stack'}
    </button>
  </div>
}

const mapStateToProps = (state) => {
  const { activeCardStackId, cardStacksById, incorrectCardIds } = state
  const activeCardStackIds = cardStacksById[activeCardStackId].cards
  return {
    incorrectCardIds,
    activeCardStackIds,
    missedSomeCards: !!incorrectCardIds.length,
    missedAllCards: incorrectCardIds.length == activeCardStackIds.length,
  }
}

const mapDispatchToProps = {
  onSetActiveCardIds: setActiveCardIds,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard)
