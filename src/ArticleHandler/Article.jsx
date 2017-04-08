import React, {Component} from 'react';

class Article extends Component {
	render () {
		var article = this.props.article;

		return (
			<div>
				<p>{article.title}</p>
				<p align="right">{article.author}</p>
				<p>{article.description}</p>
			</div>
		)
	}
}

export default Article;