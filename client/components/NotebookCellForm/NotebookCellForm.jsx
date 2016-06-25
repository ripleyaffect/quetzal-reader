import React from 'react'

class NotebookCellForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			content: '',
			type: 'text',
		}
	}

	handleSubmit = (e) => {
		// Prevent page reload
		e.preventDefault()

		// Dummy submission
		console.log(this.state)

		// Reset the content
		this.setState({ content: '' })
	};

	handleChange = (e) => {
		this.setState({ content: e.target.value })
	};

	render() {
		const { content } = this.state

		return <form onSubmit={this.handleSubmit}>
			<input type="text" onChange={this.handleChange} value={content} />
			<input type="submit" value="Add cell" />
		</form>
	}
}

export default NotebookCellForm
