import React from 'react'
import { connect } from 'react-redux'

import { flipCard } from '../actions'

const Card = ({ front, back, id, flipped, onFlipCard }) => {
  return <div className="card" onClick={() => onFlipCard(id)}>
  	<p className="helper-text">click to see answer</p>
    <p className="card-front"><strong>{front}</strong></p>
    {flipped && <p>{back}</p>}
  </div>
}

const mapStateToProps = (state) => {
  return Object.assign({},
    state.cardsById[state.activeCardId],
    { flipped: state.activeCardFlipped }
  )
}

const mapDispatchToProps = {
  onFlipCard: flipCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
