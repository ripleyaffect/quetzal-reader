import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import PageList from 'app/components/PageList'
import ActivePage from 'app/components/ActivePage'
import { getBook } from 'app/reducers'

const ActiveBook = ({ children, id, title }) => {
  return <div className="active-book">
    <PageList bookId={id} />
    {children}
  </div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...getBook(state, ownProps.params.bookId),
    id: parseInt(ownProps.params.bookId),
  }
}

export default withRouter(connect(mapStateToProps)(ActiveBook))
