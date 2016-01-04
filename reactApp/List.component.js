import React from "react";

var List = React.createClass({
	handleChange(event) {
		if (event.keyCode === 13) {
			this.props.updateFoo(event.target.value)
			event.target.value = "";
		}
	},
	render() {
		return (
			<div>
				<input onKeyDown={this.handleChange}/>
			</div>
		)
	}
});

export default List;
