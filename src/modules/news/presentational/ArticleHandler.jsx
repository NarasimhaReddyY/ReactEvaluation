import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Article from './Article.jsx';

export default function ArticleHandler({ articles }) {
  const articleComponents = _.map(articles, (article, index) => {
    return (<Article key={index} article={article} />);
  });

  return (
    <div>
      {articleComponents}
    </div>
  );
}

ArticleHandler.propTypes = {
  articles: PropTypes.array.isRequired,
};
