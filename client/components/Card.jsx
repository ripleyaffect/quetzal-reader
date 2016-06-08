import React from 'react'
import { connect } from 'react-redux'

import { flipCard } from '../actions'

const Card = ({ front, back, id, flipped, onFlipCard }) => {
  return <div className="card">
    <p onClick={() => onFlipCard(id)}>{flipped ? back : front}</p>
  </div>
}

const mapStateToProps = (state) => state.cardsById[state.activeCardId]

const mapDispatchToProps = {
  onFlipCard: flipCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
