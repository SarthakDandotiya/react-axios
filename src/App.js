import React, { Component } from 'react';
import './App.css';

import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';
import PersonDelete from './Components/PersonDelete';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<PersonInput />
				<PersonDelete />
				<PersonList />
			</div>
		);
	}
}

export default App;
