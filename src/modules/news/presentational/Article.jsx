import React from 'react';
import PropTypes from 'prop-types';

export default function Article({article}) {
	return (
		<div className="article">
			<h3>{article.title}</h3>
			<img src={article.urlToImage} alt={article.title}/>
			<p>{article.description.slice(0, 150)}</p>
		</div>
	)
}

Article.propTypes = {
	article: PropTypes.object.isRequired
}