import React from 'react'
import { connect } from 'react-redux'

import { getCellById } from 'app/reducers'
import NotebookCellData from './NotebookCellData'

class NotebookCell extends React.Component {
  render() {
    const { data, type, error } = this.props

    if (error) {
      return <div>{error}</div>
    }

    return <div className="notebook-cell" onClick={this.handleClick}>
      <NotebookCellData data={data} type={type} />
    </div>
  }
}

const mapStateToProps = (state, { id }) => {
  return getCellById(state, id)
}

export default connect(mapStateToProps)(NotebookCell)
