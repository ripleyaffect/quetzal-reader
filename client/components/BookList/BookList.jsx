import React from 'react'
import { connect } from 'react-redux'

import { getBook } from 'app/reducers'

import BookListBook from './BookListBook'

const BookList = ({ books }) => {
  return <div className="book-list">
    {books.map(book => <BookListBook {...book} key={book.id} />)}
  </div>
}

const mapStateToProps = (state) => ({
  books: state.bookIds.map(id => getBook(state, id)),
})

export default connect(mapStateToProps)(BookList)
