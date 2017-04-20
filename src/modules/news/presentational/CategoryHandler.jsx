import React, {Component} from 'react';
import Category from './Category.jsx';
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
