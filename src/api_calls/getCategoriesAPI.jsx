import _ from 'lodash';
import axios from 'axios';
import { setCategories } from '../actions/index.jsx';

export default function getCategoriesAPI () {
	return function(dispatch) {	
		var categories = [];

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
				
				dispatch(setCategories(categories));
			}
		);
	}
}