import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getPage } from 'app/reducers'

const PageListPage = ({ bookId, id, title }) => {
  return <Link to={`/${bookId}/${id}`} className="page-list-page">
    <p>{title}</p>
  </Link>
}

const mapStateToProps = (state, ownProps) => ({
  ...getPage(state, ownProps.id),
  ...ownProps,
})

export default connect(mapStateToProps)(PageListPage)
