import React, {Component} from 'react';
import _ from 'lodash';

class SelectBox extends Component {
	constructor(props){
		super(props);
	}

	render(){
		var sources = this.props.sources;
		var options = []; 

		_.forEach(sources, (source) => { 
			options.push(<option value={source}>{_.upperCase(source)}</option>)
		});

		return (
			 <select>
			 {options}
			</select> 
		)
	}
}

export default SelectBox;