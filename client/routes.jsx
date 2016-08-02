import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from 'app/components/App'
import ActiveBook from 'app/components/ActiveBook'
import ActivePage from 'app/components/ActivePage'
import BookIndex from 'app/components/BookIndex'
import Reader from 'app/components/Reader'

export default (
  <Route path="/" component={App}>
    <Route component={Reader}>
      <Route path=":bookId" component={ActiveBook}>
        <IndexRoute component={BookIndex} />
        <Route path=":pageId" component={ActivePage} />
      </Route>
    </Route>
  </Route>
)

