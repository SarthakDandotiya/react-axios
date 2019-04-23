import React, { Component } from 'react';
import axios from 'axios';

class PersonInput extends Component {
	state = {
		id: 0
	};

	handleChange = event => {
		this.setState({ id: event.target.value });
	};

	handleSubmit = event => {
		// Stops the browser from reloading the page
		event.preventDefault();

		axios
			.delete(
				'https://jsonplaceholder.typicode.com/users/${this.state.id}'
			)
			.then(res => {
				console.log(res);
				console.log(res.data);
			});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					{' '}
					Person ID:
					<input type='text' name='id' onChange={this.handleChange} />
				</label>
				<button type='submit'>Delete</button>
			</form>
		);
	}
}

export default PersonInput;
