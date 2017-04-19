import React, {Component} from 'react';
import _ from 'lodash';

class Category extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			return (
				<li value={this.props.name} onClick={this.props.handleOnClick}>{_.upperCase(this.props.name)}</li>
			)
		}
}

export default Category;