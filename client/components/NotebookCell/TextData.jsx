import React from 'react'

export default class TextData extends React.Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired,
  };

  render() {
    const { content } = this.props

    return <div className="notebook-cell-data text-data">
      <p>{content}</p>
    </div>
  }
}
