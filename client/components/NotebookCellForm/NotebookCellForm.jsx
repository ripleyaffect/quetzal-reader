import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import { createCell } from 'app/actions'
import NotebookCellDataEditor from 'app/components/NotebookCellDataEditor'

const DEFAULT_TYPE= 'code'

function getDataShape(type, data={}) {
  switch (type) {
    case 'code': 
      return {
        content: data.content || '',
        syntax: data.syntax || 'js',
      }
    default:
      return {
        content: data.content || ''
      }
  }
}

class NotebookCellForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: getDataShape(DEFAULT_TYPE),
      type: DEFAULT_TYPE,
    }
  }

  /**
   * Clear the content, but keep other fields set
   */
  clearContent = () => {
    this.setState({
      data: getDataShape(
        this.state.type,
        _.assign({}, this.state.data, { content: '' }))
    })
  };

  handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault()

    this.props.createCell(this.state)

    // Reset the content
    this.clearContent()
  };

  handleDataChange = (newData) => {
    this.setState({ data: newData })
  };

  render() {
    return <form onSubmit={this.handleSubmit}>
      <NotebookCellDataEditor {...this.state} onChange={this.handleDataChange} />
      <input type="submit" value="Add cell" />
    </form>
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = ({ createCell })

export default connect(mapStateToProps, mapDispatchToProps)(NotebookCellForm)
