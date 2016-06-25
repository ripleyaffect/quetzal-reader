import React from 'react'

import NotebookCell from 'app/components/NotebookCell'
import { cells } from 'app/dummyData'

const Notebook = () => {
  return <div className="notebook">
    {cells.map(cell => <NotebookCell {...cell} key={cell.id} />)}
  </div>
}

export default Notebook
