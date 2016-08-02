import React from 'react'
import { connect } from 'react-redux'

import { fetchBooksIfNeeded } from 'app/actions'
import ActiveBook from 'app/components/ActiveBook'
import BookList from 'app/components/BookList'

const Reader = ({ children }) => {
  return <div className="reader">
    <BookList />
    {children}
  </div>
}

class ReaderWrapper extends React.Component {
  componentWillMount() {
    this.props.fetchBooksIfNeeded()
  }

  render() {
    return <Reader {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return ownProps
}
const mapDispatchToProps = {
  fetchBooksIfNeeded,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReaderWrapper)
