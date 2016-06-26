import React from 'react'

export default class TextDataEditor extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  };

  handleContentChange  = (e) => {
    this.props.onChange({ content: e.target.value })
  };

  render() {
    const { data: { content } } = this.props

    return <div className="notebook-cell-data-editor code-data-editor">
      <textarea
          className="notebook-cell-data-editor text-data-editor"
          value={content}
          onChange={this.handleContentChange} />
    </div>
  }
}
