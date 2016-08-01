import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getBook } from 'app/reducers'
import PageList from 'app/components/PageList'
import ActivePage from 'app/components/ActivePage'

const ActiveBook = ({ children, id, pageIds, title }) => {
  return <div className="active-book">
    <PageList bookId={id} bookTitle={title} ids={pageIds} />
    {children}
  </div>
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return getBook(state, ownProps.params.bookId)
}

export default withRouter(connect(mapStateToProps)(ActiveBook))
