import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from 'app/components/App'
import Reader from 'app/components/Reader'
import ActiveBook from 'app/components/ActiveBook'
import ActivePage from 'app/components/ActivePage'

export default (
  <Route path="/" component={App}>
    <Route component={Reader}>
      <Route path=":bookId" component={ActiveBook}>
        <Route path=":pageId" component={ActivePage} />
      </Route>
    </Route>
  </Route>
)
