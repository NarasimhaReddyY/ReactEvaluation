import React from 'react';
import Category from './Category.jsx';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default function CategoryHandler({ categories, handleOnClick}) {
	var categoryComponents = _.map(categories,
		function(name, index){
			return (
				<Category 
					key={index} 
					name={name}
					handleOnClick={handleOnClick}
				/>
			)
		}
	);

	return (
		<ul>
			{categoryComponents}
		</ul>
	)
}

CategoryHandler.propTypes = {
	categories: PropTypes.array.isRequired,
	handleOnClick: PropTypes.func.isRequired
}