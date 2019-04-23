import React, { Component } from 'react';
import './App.css';

import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<PersonInput />
				<PersonList />
			</div>
		);
	}
}

export default App;
