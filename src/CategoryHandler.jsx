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
		var _this = this;

		//used index as key, because react giving a warning. 
		//see more info here https://facebook.github.io/react/docs/lists-and-keys.html#keys
		_.forEach(categories, function(name, index){
			categoryComponents.push(<Category key={index+1} 
																				name={name}
																				handleOnClick={_this.props.handleOnClick}/>
															);
		});

		return (
			<div>
				<ul>
					{categoryComponents}
				</ul>
			</div>
		)
	}
}

export default CategoryHandler;