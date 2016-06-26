import React from 'react'

import CodeDataEditor from './CodeDataEditor'
import TextDataEditor from './TextDataEditor'

export default class NotebookCellDataEditor extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
  };

  render() {
    const { data, type, onChange } = this.props

    switch (type) {
      case 'text':
        return <TextDataEditor data={data} onChange={onChange} />
      case 'code':
        return <CodeDataEditor data={data} onChange={onChange} />
      default:
        return <p>Data type not recognized</p>
    }
  }
}
