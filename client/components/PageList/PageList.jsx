import React from 'react'

import PageListPage from './PageListPage'

const PageList = ({ bookId, ids }) => {
  return <div className="page-list">
    {ids.map(id => <PageListPage key={id} bookId={bookId} id={id} />)}
  </div>
}

export default PageList
