import React from 'react'
import { connect } from 'react-redux'

import { flipCard, markCardCorrect, markCardIncorrect } from '../actions'

const Card = ({
  front,
  back,
  id,
  flipped,
  nextCardId,
  onFlipCard,
  onMarkCardCorrect,
  onMarkCardIncorrect,
}) => {
  return <div className={`card ${flipped ? 'flipped' : ''}`}>
    {!flipped && <div className="card-helper-text" onClick={() => onFlipCard(id)}>
      click to see answer
    </div>}
    <div className="card-front" onClick={() => onFlipCard(id)}>
      <p className="card-front-content"><strong>{front}</strong></p>
    </div>
    {flipped && <div className="card-back">
      <p className="card-back-content">{back}</p>
    </div>}
    {flipped && <div className="card-navigation">
        <button
            className="navigation-button mark-card-incorrect"
            onClick={() => onMarkCardIncorrect(id, nextCardId)}>
          nah
        </button>
        <button
            className="navigation-button mark-card-correct"
            onClick={() => onMarkCardCorrect(id, nextCardId)}>
          yey
        </button>
    </div>}
  </div>
}

const mapStateToProps = (state) => {
  const activeCardIndex = state.activeCardIds.indexOf(state.activeCardId)
  return Object.assign({},
    state.cardsById[state.activeCardId],
    {
      flipped: state.activeCardFlipped,
      nextCardId: state.activeCardIds[activeCardIndex + 1],
    }
  )
}

const mapDispatchToProps = {
  onFlipCard: flipCard,
  onMarkCardCorrect: markCardCorrect,
  onMarkCardIncorrect: markCardIncorrect,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
