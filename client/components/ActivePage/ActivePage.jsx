import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getPageById } from 'app/reducers'

const ActivePage = ({ title }) => {
  return <div className="active-page">
    <h2>{title}</h2>
  </div>
}

const mapStateToProps = (state, ownProps) => {
  return getPageById(state, ownProps.params.pageId)
}

export default withRouter(connect(mapStateToProps)(ActivePage))
