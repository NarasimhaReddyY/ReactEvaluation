import React, {Component} from 'react';
import Category from './Category.jsx';
import _ from 'lodash';

class CategoryHandler extends Component {

	constructor (props) {
		super(props);
	}

	render () {
		var categoryComponents = [];
		var categories = this.props.categories;
		var _this = this;

		_.forEach(categories, function(name, index){
			categoryComponents.push(<Category 
																key={index} 
																name={name}
																handleOnClick={_this.props.handleOnClick}
															/>);
		});

		return (
			<ul>
				{categoryComponents}
			</ul>
		)
	}
}

export default CategoryHandler;