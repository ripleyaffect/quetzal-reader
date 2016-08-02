import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getLastSeenPage } from 'app/reducers'

const BookListBook = ({ lastSeenPage, color, id, loading, title }) => {
  return <Link
      to={`/${id}/${lastSeenPage ? lastSeenPage.id : '' }`}
      className="book-list-book"
      style={{ backgroundColor: color }}>
  </Link>
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  lastSeenPage: getLastSeenPage(state, ownProps.id),
})

export default connect(mapStateToProps)(BookListBook)
