import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getLastSeenPageId } from 'app/reducers'

const BookListBook = ({ lastSeenPageId, color, id, loading, title }) => {
  return <Link
      to={`/${id}/${lastSeenPageId ? lastSeenPageId : '' }`}
      activeClassName="book-list-book__selected"
      className="book-list-book"
      style={{ backgroundColor: color }}>
  </Link>
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  lastSeenPageId: getLastSeenPageId(state, ownProps.id),
})

export default connect(mapStateToProps)(BookListBook)
