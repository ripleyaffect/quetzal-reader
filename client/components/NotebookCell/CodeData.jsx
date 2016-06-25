import React from 'react'

export default class CodeData extends React.Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired,
    syntax: React.PropTypes.string.isRequired,
  };

  render() {
    const { content, syntax } = this.props

    return <div className="notebook-cell-data code-data">
      <p>{syntax}</p>
      <p>{content}</p>
    </div>
  }
}
