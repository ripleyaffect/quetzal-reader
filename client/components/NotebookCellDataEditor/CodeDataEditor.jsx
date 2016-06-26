import _ from 'lodash'
import React from 'react'

export default class CodeDataEditor extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  };

  handleChange = (newData) => {
    this.props.onChange(_.assign({}, this.props.data, newData))
  };

  handleContentChange  = (e) => {
    this.handleChange({ content: e.target.value })
  };

  handleSyntaxChange  = (e) => {
    this.handleChange({ syntax: e.target.value })
  };

  render() {
    const { data: { content, syntax } } = this.props

    return <div className="notebook-cell-data-editor code-data-editor">
      <select onChange={this.handleSyntaxChange} value={syntax}>
        <option value="js">JavaScript</option>
        <option value="python">Python</option>
        <option value="go">Go</option>
      </select>
      <textarea onChange={this.handleContentChange} value={content} />
    </div>
  }
}
