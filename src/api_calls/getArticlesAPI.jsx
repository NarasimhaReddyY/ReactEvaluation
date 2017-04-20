import axios from 'axios';
import { setArticles } from '../actions/index.jsx';

export default function getArticlesAPI(resource) {
	return function (dispatch) {
		axios.get('https://newsapi.org/v1/articles', {
				params: {
					source: resource,
					apiKey: '91a53883772d44bf8ee89d81249d4ac7'
				}
			})
			.then(function(response){
				dispatch(setArticles(response.data.articles));
			});
	}
}