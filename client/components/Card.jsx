import _ from 'lodash'
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
  return <div className="card">
    <p className="helper-text">click question to see answer</p>
    <div className="card-content" onClick={() => onFlipCard(id)}>
      <p className="card-front"><strong>{front}</strong></p>
      {flipped && <p>{back}</p>}
    </div>
    {flipped && <div className="card-stack-navigation-container">
      <div className="card-stack-navigation">
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
      </div>
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
