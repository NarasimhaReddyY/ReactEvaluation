import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import CategoryHandler from './CategoryHandler.jsx';
import ResourceHandlerContainer from '../containers/ResourceHandlerContainer.jsx';

class Body extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		var categories = [];
		var _this = this;

		axios({
		  method: 'get',
		  url: 'https://newsapi.org/v1/sources',
		  data: {
		  	language: "en"
		  }
		})
		.then(
			function(response) {
				var uniqList = _.uniqBy(response.data.sources, 'category');

				_.forEach(uniqList, function(object){
					categories.push(object.category)
				});
				
				_this.props.setCategories(categories);
			}
		);
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
						<ResourceHandlerContainer
							category={this.props.category}
						/> :
						<p>Wait!, Resources are loading!</p> 
						}
				</div>
			</div>
		)
	}
}

export default Body;