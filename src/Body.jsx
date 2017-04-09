import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import CategoryHandler from './CategoryHandler.jsx';
import ResourceHandler from './ResourceHandler.jsx';

class Body extends Component {

	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			category: ""
		}

		this.setCategory = this.setCategory.bind(this);
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
				
				_this.setState({
					categories: categories
				});		
			}
		);
	}

	//to set/get a non standard attribute on DOM, We can use set/getAttribute() method.
	setCategory (event) {
		this.setState({
			category: event.currentTarget.getAttribute('value')
		});

		_.forEach(event.target.parentNode.children, function(element) {
				element.classList.remove("active");
		});
		
		event.target.className = "active";
	}

	render() {
		return(
			<div className="news-body">
				<div className="category-menu">
					{ (this.state.categories.length > 0) ? 
						<CategoryHandler 
						categories={this.state.categories}
						handleOnClick={this.setCategory}/> : ""
					}
				</div>
				<div className="resource-handler">
					{(this.state.categories.length > 0) ? 
						<ResourceHandler 
						category={this.state.category}/> :
						<p>Wait!, Resources are loading!</p> 
						}
				</div>
			</div>
		)
	}
}

export default Body;