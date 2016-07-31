import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { setActiveBookId } from 'app/actions'
import { getBookById } from 'app/reducers'

const BookListBook = ({ id, loading, title, setActiveBookId }) => {
  return <Link to={`/${id}`} className="book-list-book">
    <p>{title}</p>
  </Link>
}

const mapStateToProps = (state, ownProps) => getBookById(state, ownProps.id)
const mapDispatchToProps = ({
  setActiveBookId, 
})

export default connect(mapStateToProps, mapDispatchToProps)(BookListBook)
