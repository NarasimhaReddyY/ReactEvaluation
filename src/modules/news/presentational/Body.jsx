import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryHandler from './CategoryHandler.jsx';
import ResourceHandler from './ResourceHandler.jsx';

class Body extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setCategories();
	}

	render() {
		var category_length = this.props.categories.length;

		return(
			<div className="news-body">
				<div className="category-menu">
					{ ( category_length > 0) ? 
						<CategoryHandler 
							categories={this.props.categories}
							handleOnClick={this.props.setCategory}
						/> : ''
					}
				</div>
				<div className="resource-handler">
					{( category_length 	> 0) ? 
						<ResourceHandler
							category={this.props.category}
							resource={this.props.resource}
							resources={this.props.resources}
							articles={this.props.articles}
							setResource={this.props.setResource}
							setResources={this.props.setResources}
							setArticles={this.props.setArticles}
						/> :
						<p>Wait!, Resources are loading!</p> 
						}
				</div>
			</div>
		)
	}
}

Body.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.string,
  resources: PropTypes.array,
  resource: PropTypes.string,
  articles: PropTypes.array,

  setCategories: PropTypes.func,
  setCategory: PropTypes.func,
  setResources: PropTypes.func,
  setResource: PropTypes.func,
  setArticles: PropTypes.func
}


export default Body;