import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ cellsById }, { id }) => {
	return cellsById[id] || { error: `No cell with id ${id}` }
}

export default connect(mapStateToProps)(NotebookCell)
