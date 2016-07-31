import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getBookById } from 'app/reducers'
import PageList from 'app/components/PageList'
import ActivePage from 'app/components/ActivePage'

const ActiveBook = ({ children, id, pageIds, title }) => {
  return <div className="active-book">
    <h1>{title}</h1>
    <PageList bookId={id} ids={pageIds} />
    {children}
  </div>
}

const mapStateToProps = (state, ownProps) => {
  return getBookById(state, ownProps.params.bookId)
}

export default withRouter(connect(mapStateToProps)(ActiveBook))
