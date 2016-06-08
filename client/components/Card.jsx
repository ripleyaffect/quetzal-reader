import React from 'react'
import { connect } from 'react-redux'

const Card = ({ front, back, flipped }) => {
  return <div className="card">
    <p>{flipped ? back : front}</p>
  </div>
}

const mapStateToProps = (state) => {
  return state.cardsById[state.activeCardId]
}

export default connect(mapStateToProps)(Card)
