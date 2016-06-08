import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { setActiveCardId } from '../actions'

const CardStack = ({ inReview, title }) => {
  return <div className="card-stack">
    <h1 className="card-stack-title">{title}</h1>
    {inReview ?
      <p>In Review</p>
    : <Card />}
  </div>
}

const mapStateToProps = (state) => {
  return Object.assign({},
    state.cardStacksById[state.activeCardStackId],
    { inReview: !state.activeCardId }
  )
}

export default connect(mapStateToProps)(CardStack)
