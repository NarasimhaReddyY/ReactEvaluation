import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import SelectBox from './ResourceHandler/SelectBox.jsx';
import ArticleHandler from './ArticleHandler.jsx'

class ResourceHandler extends Component {
	constructor (props) {
		super(props);

		this.state = {
			sources: [],
			source: "",
			articles: []
		}

		this.handleOnSelect = this.handleOnSelect.bind(this);
	}

	handleOnSelect(event) {
		this.setState({
			source: event.target.value
		})
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
					
					_this.setState({
						sources: sources
					});		
				}
			);
		}
	}

	//For same source no need to call API again.
	//Check if source is blank, because if source is blank api will raise an error.
	componentDidUpdate (prevProps, prevState) {
		var _this = this;	

		if ((!_.isEmpty(this.state.source)) && !(this.state.source == prevState.source)) {
			axios.get("https://newsapi.org/v1/articles", {
				params: {
					source: this.state.source,
					apiKey: "91a53883772d44bf8ee89d81249d4ac7"
				}
			})
			.then(function(response){
				_this.setState({
					articles: response.data.articles
				});
			});
		}
	}

	render(){

		return (
			<div>
				<div className="select-box">
				<p>Select Source</p>
				{
					(this.state.sources.length > 0) ? 
					<SelectBox 
					sources={this.state.sources}
					handleOnSelect={this.handleOnSelect}/> :
					<p>No valid source found</p>
				}
				</div>
				<div className="article-handler">
					{ this.state.articles.length > 0 ? 
						<ArticleHandler articles={this.state.articles}/> :
						""
					}
				</div>
			</div>
		)
	}
}

export default ResourceHandler;