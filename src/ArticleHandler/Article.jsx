import React, {Component} from 'react';

class Article extends Component {
	render () {
		var article = this.props.article;

		return (
			<div className="article">
				<h3>{article.title}</h3>
				<img src={article.urlToImage} alt={article.title}/>
				<p>{article.description.slice(0, 150)}</p>
			</div>
		)
	}
}

export default Article;