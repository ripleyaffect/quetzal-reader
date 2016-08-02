import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router'

import { fetchBookPagesIfNeeded } from 'app/actions'
import { isFetchingBookPages, getBook, getBookPages } from 'app/reducers'

import PageListPage from './PageListPage'

const PageList = ({ bookId, title, pages }) => {
  return <div className="page-list">
    <Link to={`/${bookId}/`}><p><strong>{title}</strong></p></Link>
    {pages.map(page => <PageListPage {...page} key={page.id} />)}
  </div>
}

const PageListLoading = () => {
  return <div className="page-list">
    <p>Loading...</p>
  </div>
}

class PageListWrapper extends React.Component {
  componentDidMount() {
    const { bookId, fetchBookPagesIfNeeded } = this.props;
    if (bookId) {
      fetchBookPagesIfNeeded(bookId)
    }
  }

  componentDidUpdate() {
    const { bookId, fetchBookPagesIfNeeded } = this.props;
    if (bookId) {
      fetchBookPagesIfNeeded(bookId)
    }
  }

  render() {
    const { pages, fetching } = this.props
    if (fetching) {
      return <PageListLoading />
    }
    if (pages) {
      return <PageList {...this.props} />
    }
    return <div />
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...getBook(state, ownProps.bookId),
  fetching: isFetchingBookPages(state, ownProps.bookId),
  pages: getBookPages(state, ownProps.bookId)
})
const mapDispatchToProps = {
  fetchBookPagesIfNeeded,
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PageListWrapper))
