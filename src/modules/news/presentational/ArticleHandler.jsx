import React, {Component} from 'react';
import Article from './Article.jsx';
import _ from 'lodash';

class ArticleHandler extends Component {

	constructor (props) {
		super(props);
	}

	render() {
			var articles = this.props.articles;
			var articleComponents = [];

			_.forEach(articles, function(article, index){
				articleComponents.push(<Article article={article}/>);
			});

		return (
			<div>
				{articleComponents}
			</div>
		)
	}
}

export default ArticleHandler;