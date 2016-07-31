import React from 'react'
import { connect } from 'react-redux'

import ActiveBook from 'app/components/ActiveBook'
import BookList from 'app/components/BookList'

const Reader = ({ children }) => {
  return <div className="reader">
    <BookList />
    {children}
  </div>
}

export default Reader
