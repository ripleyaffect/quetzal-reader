import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getBook } from 'app/reducers'

const BookIndex = ({ title }) => {
  return <div className="book-index">
    <h2>{title}</h2>
  </div>
}

const mapStateToProps = (state, ownProps) => ({
  ...getBook(state, ownProps.params.bookId)
})

export default withRouter(connect(mapStateToProps)(BookIndex))
