import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { setActiveCardId } from '../actions'

const CardStack = ({ nextCardId, prevCardId, title, onSetActiveCardId }) => {
  return <div className="card-stack">
    <h1 className="card-stack-title">{title}</h1>
    <Card />
    <div className="card-stack-navigation">
      {prevCardId && <button
          className="navigation-button prev-navigation"
          onClick={() => onSetActiveCardId(prevCardId)}>
        &lt; back
      </button>}
      {nextCardId && <button
          className="navigation-button next-navigation"
          onClick={() => onSetActiveCardId(nextCardId)}>
        forward &gt;
      </button>}
    </div>
  </div>
}

const mapStateToProps = (state) => {
  const activeStack = state.cardStacksById[state.activeCardStackId]
  const activeCardIndex = activeStack.cards.indexOf(state.activeCardId)
  return Object.assign({},
    activeStack,
    {
      prevCardId: activeStack.cards[activeCardIndex - 1],
      nextCardId: activeStack.cards[activeCardIndex + 1],
    }
  )
}

const mapDispatchToProps = {
  onSetActiveCardId: setActiveCardId
}

export default connect(mapStateToProps, mapDispatchToProps)(CardStack)
