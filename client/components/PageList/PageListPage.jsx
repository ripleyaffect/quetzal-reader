import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getPageById } from 'app/reducers'

const PageListPage = ({ bookId, id, title, setActivePageId }) => {
  return <Link to={`/${bookId}/${id}`} className="page-list-page">
    <p>{title}</p>
  </Link>
}

const mapStateToProps = (state, ownProps) => ({
  ...getPageById(state, ownProps.id),
  ...ownProps,
})

export default connect(mapStateToProps)(PageListPage)
