import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import CategoryHandler from './CategoryHandler.jsx';
import ResourceHandler from './ResourceHandler.jsx';

class Body extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setCategories();
	}

	render() {
		return(
			<div className="news-body">
				<div className="category-menu">
					{ (this.props.categories.length > 0) ? 
						<CategoryHandler 
							categories={this.props.categories}
							handleOnClick={this.props.setCategory}
						/> : ""
					}
				</div>
				<div className="resource-handler">
					{(this.props.categories.length > 0) ? 
						<ResourceHandler
							category={this.props.category}
							{...this.props}
						/> :
						<p>Wait!, Resources are loading!</p> 
						}
				</div>
			</div>
		)
	}
}

export default Body;