import React, {Component} from 'react';
import Article from './Article.jsx';
import _ from 'lodash';

export default function ArticleHandler ({articles}) {
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