import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SelectBox from '../../common/SelectBox.jsx';
import ArticleHandler from './ArticleHandler.jsx';

class ResourceHandler extends Component {

  componentWillReceiveProps(nextProps) {
    const scopeThis = this;

    // for same category no need to call API again.
    if (!(this.props.category === nextProps.category)) {
      scopeThis.props.setResources(nextProps.category);
    }
  }

  componentDidUpdate(prevProps) {
    const scopeThis = this;

    // For same source no need to call API again.
    // Check if source is blank, because if source is blank api will raise an error.
    if ((!_.isEmpty(this.props.resource)) && !(this.props.resource === prevProps.resource)) {
      scopeThis.props.setArticles(scopeThis.props.resource);
    }
  }

  render() {
    return (
      <div>
        <div className="select-box">
          <p>Select Source</p>
          {
          (
            (this.props.resources.length > 0) ?
              <SelectBox
                sources={this.props.resources}
                handleOnSelect={this.props.setResource}
              /> :
              <p>No valid source found</p>
            )
          }
        </div>
        <div className="article-handler">
          {
          (
            this.props.articles.length > 0 ?
              <ArticleHandler articles={this.props.articles} /> : ''
          )
          }
        </div>
      </div>
    );
  }
}

ResourceHandler.defaultProps = {
  category: '',
  resources: [],
  resource: '',
  articles: [],

  setResource: '',
};

ResourceHandler.propTypes = {
  category: PropTypes.string.isRequired,
  resources: PropTypes.array,
  resource: PropTypes.string,
  articles: PropTypes.array,

  setResource: PropTypes.func,
};

export default ResourceHandler;
