import React from 'react'
import { connect } from 'react-redux'

import NotebookCell from 'app/components/NotebookCell'
import NotebookCellForm from 'app/components/NotebookCellForm'

const Notebook = ({ cellIds }) => {
  return <div className="notebook">
    {cellIds.map(id => <NotebookCell id={id} key={id} />)}
    <NotebookCellForm />
  </div>
}

export default connect(state => state)(Notebook)
