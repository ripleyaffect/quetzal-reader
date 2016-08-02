import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { setLastSeenPageId } from 'app/actions'
import { getPage } from 'app/reducers'

const ActivePage = ({ title }) => {
  return <div className="active-page">
    <h2>{title}</h2>
  </div>
}

class ActivePageWrapper extends React.Component {
  componentDidMount() {
    const { bookId, id, setLastSeenPageId } = this.props;
    if (bookId && id) {
      setLastSeenPageId(bookId, id)
    }
  }

  componentDidUpdate() {
    const { bookId, id, setLastSeenPageId } = this.props;
    if (bookId && id) {
      setLastSeenPageId(bookId, id)
    }
  }

  render() {
    return <ActivePage {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...getPage(state, ownProps.params.pageId),
})
const mapDispatchToProps = {
  setLastSeenPageId,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ActivePageWrapper))
