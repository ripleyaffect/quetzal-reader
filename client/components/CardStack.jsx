import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const CardStack = ({ nextCardId, prevCardId, title }) => {
  return <div className="card-stack">
    <h1>{title}</h1>
    <Card />
    <div className="card-stack-navigation">
      {prevCardId && <div>&lt; back to {prevCardId}</div>}
      {nextCardId && <div>forward to {nextCardId} &gt;</div>}
    </div>
  </div>
}

const mapStateToProps = (state) => {
  const activeStack = state.cardStacksById[state.activeCardStackId]
  console.log(activeStack)

  const activeCardIndex = activeStack.cards.indexOf(state.activeCardId)
  console.log(activeCardIndex)
  return Object.assign({},
    activeStack,
    {
      prevCardId: activeStack.cards[activeCardIndex - 1],
      nextCardId: activeStack.cards[activeCardIndex + 1],
    }
  )
}

export default connect(mapStateToProps)(CardStack)
