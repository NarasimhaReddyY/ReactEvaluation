import React, {Component} from 'react';
import Article from './Article.jsx';
import _ from 'lodash';

export default function ArticleHandler ({articles}) {

	var articleComponents = _.map(articles,
		function(article, index){
			return (<Article key={index} article={article}/>);
		}
	);

	return (
		<div>
			{articleComponents}
		</div>	
	)
}