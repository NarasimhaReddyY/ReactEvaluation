import React, {Component} from 'react';
import _ from 'lodash';
import SelectBox from '../../common/SelectBox.jsx';
import ArticleHandler from './ArticleHandler.jsx';
import PropTypes from 'prop-types';

class ResourceHandler extends Component {
	constructor (props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		var _this = this;

		//for same category no need to call API again.
		if (!(this.props.category == nextProps.category)) {
			_this.props.setResources(nextProps.category);
		}
	}

	componentDidUpdate (prevProps) {
		var _this = this;
		
		//For same source no need to call API again.
		//Check if source is blank, because if source is blank api will raise an error.
		if ((!_.isEmpty(this.props.resource)) && !(this.props.resource == prevProps.resource)) {
			_this.props.setArticles(_this.props.resource);
		}
	}

	render(){

		return (
			<div>
				<div className="select-box">
				<p>Select Source</p>
				{
					(
						(this.props.resources.length > 0) ? 
						<SelectBox 
						sources={this.props.resources}
						handleOnSelect={this.props.setResource}/> :
						<p>No valid source found</p>
					)
				}
				</div>
				<div className="article-handler">
					{ 
						(
							this.props.articles.length > 0 ? 
							<ArticleHandler articles={this.props.articles}/> : ''
						)
					}
				</div>
			</div>
		)
	}
}

ResourceHandler.propTypes = {
	categories: PropTypes.array,
	category: PropTypes.string.isRequired,
	resources: PropTypes.array,
  resource: PropTypes.string,
  articles: PropTypes.array,

  setCategories: PropTypes.func,
  setCategory: PropTypes.func,
  setResources: PropTypes.func,
  setResource: PropTypes.func,
  setArticles: PropTypes.func
}


export default ResourceHandler;