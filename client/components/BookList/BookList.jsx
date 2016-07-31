import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import BookListBook from './BookListBook'

const BookList = ({ ids }) => {
  return <div className="book-list">
    {ids.map(id => <BookListBook key={id} id={id} />)}
  </div>
}

const mapStateToProps = (state) => ({
  ids: state.bookIds,
})

export default connect(mapStateToProps)(BookList)
