import React from 'react'
import { connect } from 'react-redux'

import { createCell } from 'app/actions'

class NotebookCellForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: { content: '' },
      type: 'text',
    }
  }

  handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault()

    this.props.createCell(this.state)

    // Reset the content
    this.setState({ data: { content: '' } })
  };

  handleChange = (e) => {
    this.setState({ data: { content: e.target.value } })
  };

  render() {
    const { data: { content } } = this.state

    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} value={content} />
      <input type="submit" value="Add cell" />
    </form>
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = ({ createCell })


export default connect(mapStateToProps, mapDispatchToProps)(NotebookCellForm)
