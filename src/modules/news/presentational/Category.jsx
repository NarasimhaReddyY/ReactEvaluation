import React, {Component} from 'react';
import _ from 'lodash';

export default function Category ({ name, handleOnClick }) {
	return (
		<li 
			value={name}
			onClick={handleOnClick}
		>
			{_.upperCase(name)}
		</li>

	)	
}