import React from 'react'
import { connect } from 'react-redux'

import { getCellById } from 'app/reducers'

class NotebookCell extends React.Component {
  render() {
    const { data, type, error } = this.props

    if (error) {
      return <div>{error}</div>
    }

    return <div className="notebook-cell" onClick={this.handleClick}>
      This is a {type} cell with data: {JSON.stringify(data)}
    </div>
  }
}

const mapStateToProps = (state, { id }) => {
  return getCellById(state, id)
}

export default connect(mapStateToProps)(NotebookCell)
