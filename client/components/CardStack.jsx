import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const CardStack = ({ title }) => {
  return <div className="card-stack">
    <h1>{title}</h1>
    <Card />
    <div className="card-stack-navigation">
      <div>&lt; back</div>
      <div>forward &gt;</div>
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return state.cardStacksById[state.activeCardStackId]
}

export default connect(mapStateToProps)(CardStack)
