import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class ReactDemo extends Component {

	render(){
		return (
			<div><h1>HELLO! - THIS IS MY REACT COMPONENT</h1></div>
		);
	}
}

ReactDOM.render(<ReactDemo />, document.getElementById('root'));