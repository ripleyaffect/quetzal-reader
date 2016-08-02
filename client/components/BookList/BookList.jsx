import React from 'react'
import { connect } from 'react-redux'

import { fetchBooksIfNeeded } from 'app/actions'
import { getBooks, isFetchingBooks } from 'app/reducers'

import BookListBook from './BookListBook'

const BookList = ({ books }) => {
  return <div className="book-list">
    {books.map(book => <BookListBook {...book} key={book.id} />)}
  </div>
}

const BookListLoading = () => {
  return <div className="book-list">
    <p>Loading...</p>
  </div>
}

class BookListWrapper extends React.Component {
  componentDidMount() {
    this.props.fetchBooksIfNeeded()
  }

  render() {
    const { books, fetching } = this.props

    if (fetching) {
      return <BookListLoading />
    }
    if (books) {
      return <BookList {...this.props} />
    }
    return <div />
  }
}

const mapStateToProps = (state) => ({
  books: getBooks(state),
  fetching: isFetchingBooks(state),
})
const mapDispatchToProps = {
  fetchBooksIfNeeded,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListWrapper)
