import React, {Component} from 'react';
import _ from 'lodash';

export default function SelectBox({sources, handleOnSelect}) {
	var options = [<option value="">Select a value</option>]; 

	_.forEach(sources, (source) => { 
		options.push(<option value={source}>{_.upperCase(source)}</option>)
	});

	return (
		<select 
		 onChange={handleOnSelect}>
		 {options}
		</select> 	
	)
}