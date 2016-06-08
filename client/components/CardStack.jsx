import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { setActiveCardId } from '../actions'

const CardStack = ({ nextCardId, prevCardId, title, onSetActiveCardId }) => {
  return <div className="card-stack">
    <h1 className="card-stack-title">{title}</h1>
    <Card />
  </div>
}

const mapStateToProps = (state) => state.cardStacksById[state.activeCardStackId]

export default connect(mapStateToProps)(CardStack)
