import React from 'react'
import { connect } from 'react-redux'

import { focusCell } from 'app/actions'

class NotebookCell extends React.Component {
	handleClick = () => {
		this.props.focusCell(this.props.id)
	};

	render() {
		const { data, focused, id, type } = this.props

		return <div className="notebook-cell" onClick={this.handleClick}>
			This is a{focused  ? ' ' : 'n un'}focused {type} cell with data: {JSON.stringify(data)}
		</div>
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		focused: ownProps.id === state.focusedCellId,
	}
}

const mapDispatchToProps = ({
	focusCell
})

export default connect(mapStateToProps, mapDispatchToProps)(NotebookCell)
