import React, {Component} from 'react';
import Category from './CategoryHandler/Category.jsx';
import _ from 'lodash';

class CategoryHandler extends Component {

	constructor (props) {
		super(props);
	}

	render () {
		var categoryComponents = [];
		var categories = this.props.categories;

		//used index, because react giving a warning. 
		//see more info here https://facebook.github.io/react/docs/lists-and-keys.html#keys
		_.forEach(categories, function(value, index){
			categoryComponents.push(<Category key={index+1} value={value}/>);
		});

		return (
			<div>
				{categoryComponents}
			</div>
		)
	}
}

export default CategoryHandler;