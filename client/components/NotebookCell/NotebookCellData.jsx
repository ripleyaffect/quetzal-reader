import React from 'react'

import CodeData from './CodeData'
import TextData from './TextData'

export default class NotebookCell extends React.Component {
  render() {
    const { data, type } = this.props

    switch (type) {
      case 'code':
        return <CodeData {...data} />
      case 'text':
        return <TextData {...data} />
      default:
        return <div>Unrecognized cell type "{type}"</div>
    }
  }
}
