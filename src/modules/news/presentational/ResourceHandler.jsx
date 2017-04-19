import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import SelectBox from '../../common/SelectBox.jsx';
import ArticleHandler from './ArticleHandler.jsx'
	
class ResourceHandler extends Component {
	constructor (props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		var _this = this;

		//for same category no need to call API again.
		if (!(this.props.category == nextProps.category)) {
			axios.get("https://newsapi.org/v1/sources", 
				{ params: 
					{ category: nextProps.category }
				}
			)
			.then(
				function(response) {
					var sources = [];
					_.forEach(response.data.sources, function(object){
						sources.push(object.id)
					});

					_this.props.setResources(sources);
				}
			);
		}
	}

	//For same source no need to call API again.
	//Check if source is blank, because if source is blank api will raise an error.
	componentDidUpdate (prevProps, prevState) {
		var _this = this;
		
		if ((!_.isEmpty(this.props.resource)) && !(this.props.resource == prevProps.resource)) {
			axios.get("https://newsapi.org/v1/articles", {
				params: {
					source: this.props.resource,
					apiKey: "91a53883772d44bf8ee89d81249d4ac7"
				}
			})
			.then(function(response){
				_this.props.setArticles(response.data.articles);
			});
		}
	}

	render(){

		return (
			<div>
				<div className="select-box">
				<p>Select Source</p>
				{
					(this.props.resources.length > 0) ? 
					<SelectBox 
					sources={this.props.resources}
					handleOnSelect={this.props.setResource}/> :
					<p>No valid source found</p>
				}
				</div>
				<div className="article-handler">
					{ this.props.articles.length > 0 ? 
						<ArticleHandler articles={this.props.articles}/> :
						""
					}
				</div>
			</div>
		)
	}
}

export default ResourceHandler;