import React from 'react'
import { connect } from 'react-redux'

import NotebookCell from 'app/components/NotebookCell'
import { cellIds } from 'app/dummyData'

const Notebook = ({ cellIds }) => {
  return <div className="notebook">
    {cellIds.map(id => <NotebookCell id={id} key={id} />)}
  </div>
}

export default connect(state => state)(Notebook)
