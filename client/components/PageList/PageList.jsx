import React from 'react'

import PageListPage from './PageListPage'

const PageList = ({ bookId, bookTitle, ids }) => {
  return <div className="page-list">
    <p><strong>{bookTitle}</strong></p>
    {ids.map(id => <PageListPage key={id} bookId={bookId} id={id} />)}
  </div>
}

export default PageList
