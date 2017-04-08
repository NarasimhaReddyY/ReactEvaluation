import React, {Component} from 'react';
import _ from 'lodash';

class SelectBox extends Component {
	constructor(props){
		super(props);
	}

	render(){
		var sources = this.props.sources;
		var options = [<option value="">Select a value</option>]; 

		_.forEach(sources, (source) => { 
			options.push(<option value={source}>{_.upperCase(source)}</option>)
		});

		return (
			 <select onChange={this.props.handleOnSelect}>
			 {options}
			</select> 
		)
	}
}

export default SelectBox;