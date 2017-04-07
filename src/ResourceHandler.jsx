import React, {Component} from 'react';

class ResourceHandler extends Component {
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<p>Select box starts here {this.props.category}</p>
		)
	}
}

export default ResourceHandler;