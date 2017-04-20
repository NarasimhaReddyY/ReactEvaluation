import React, {Component} from 'react';
import _ from 'lodash';

export default function SelectBox({sources, handleOnSelect}) {
	var options = [<option key={0} value="">Select a value</option>]; 
	_.forEach(sources, (source, index) => {
		options.push(<option key={index + 1} value={source}>{_.upperCase(source)}</option>)
	});

	return (
		<select 
		 onChange={handleOnSelect}>
		 {options}
		</select> 	
	)
}