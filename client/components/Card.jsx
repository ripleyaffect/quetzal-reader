import React from 'react'
import { connect } from 'react-redux'

import { flipCard, setActiveCardId } from '../actions'

const Card = ({
  front,
  back,
  id,
  flipped,
  nextCardId,
  prevCardId,
  onFlipCard,
  onSetActiveCardId
}) => {
  return <div className={`card ${flipped ? 'flipped' : ''}`}>
    <div className="card-helper-text" onClick={() => onFlipCard(id)}>
      click to see answer
    </div>
    <div className="card-front" onClick={() => onFlipCard(id)}>
      <p><strong>{front}</strong></p>
    </div>
    {flipped && <div className="card-back">
      <p className="card-back-content">{back}</p>
    </div>}
    {flipped && <div className="card-navigation">
        {prevCardId && <button
            className="navigation-button prev-navigation"
            onClick={() => onSetActiveCardId(prevCardId)}>
          &lt;
        </button>}
        {nextCardId && <button
            className="navigation-button next-navigation"
            onClick={() => onSetActiveCardId(nextCardId)}>
          &gt;
        </button>}
    </div>}
  </div>
}

const mapStateToProps = (state) => {
  const activeStack = state.cardStacksById[state.activeCardStackId]
  const activeCardIndex = activeStack.cards.indexOf(state.activeCardId)
  return Object.assign({},
    state.cardsById[state.activeCardId],
    {
      flipped: state.activeCardFlipped,
      nextCardId: activeStack.cards[activeCardIndex + 1],
      prevCardId: activeStack.cards[activeCardIndex - 1],
    }
  )
}

const mapDispatchToProps = {
  onFlipCard: flipCard,
  onSetActiveCardId: setActiveCardId,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
