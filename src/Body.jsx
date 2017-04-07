import React, {Component} from 'react';
import axios from 'axios';
import CategoryHandler from './CategoryHandler.jsx';
import _ from 'lodash';

class Body extends Component {

	constructor(props) {
		super(props);

		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		var categories = [];
		var _this = this;
		axios({
		  method: 'get',
		  url: 'https://newsapi.org/v1/sources',
		  data: {
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

	render() {
		return(
			<div>
				{ (this.state.categories.length > 0) ? 
					<p><CategoryHandler categories={this.state.categories}/></p> : 
					<p>Wait!, Resources are loading!</p>}
			</div>
		)
	}
}

export default Body;