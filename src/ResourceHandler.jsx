import React, {Component} from 'react';
import axios from 'axios';
import SelectBox from './ResourceHandler/SelectBox.jsx';

class ResourceHandler extends Component {
	constructor (props) {
		super(props);

		this.state = {
			sources: []
		}
	}

	componentWillReceiveProps(nextProps) {
		var _this = this;

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
						sources.push(object.name)
					});
					
					_this.setState({
						sources: sources
					});		
				}
			);
		}
	}

	render(){
		return (
			<div>
				<p>Select Source</p>
				{
					(this.state.sources.length > 0) ? 
					<SelectBox sources={this.state.sources} /> :
					<p>No valid source found</p>
				}
			</div>
		)
	}
}

export default ResourceHandler;