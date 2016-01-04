import React from 'react';
import ReactDOM from 'react-dom';

import List from './List.component';

var App = React.createClass({
	getInitialState() {
		return {
			foo: []
		}	
	},
	updateFoo(string) {
		this.setState({
			foo: this.state.foo.concat([string])
		});	
	},
	render() {
		return (
			<div>
				<List updateFoo={this.updateFoo} />
				{this.state.foo.map(function(string, index){
					return <h1 key={index}>{string}</h1>
				})}	
			</div>
		)	
	}
});

ReactDOM.render(<App />, document.getElementById("app"));
