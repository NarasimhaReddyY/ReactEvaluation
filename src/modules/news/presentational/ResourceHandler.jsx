import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import SelectBox from '../../common/SelectBox.jsx';
import ArticleHandler from './ArticleHandler.jsx';

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

	componentDidUpdate (prevProps, prevState) {
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
							<ArticleHandler articles={this.props.articles}/> : ""
						)
					}
				</div>
			</div>
		)
	}
}

export default ResourceHandler;