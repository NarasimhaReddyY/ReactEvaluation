import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

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

SelectBox.propTypes = {
	sources: PropTypes.array,
	handleOnSelect: PropTypes.func
}