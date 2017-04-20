import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function Category ({ name, handleOnClick }) {
	return (
		<li 
			value={name}
			onClick={handleOnClick} >
			{_.upperCase(name)}
		</li>

	)	
}

Category.propTypes = {
	name: PropTypes.string.isRequired,
	handleOnClick: PropTypes.func.isRequired
}