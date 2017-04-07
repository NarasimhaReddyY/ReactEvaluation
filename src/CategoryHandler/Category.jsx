import React, {Component} from 'react';
import _ from 'lodash';

class Category extends Component {
		constructor(props) {
			super(props);
		}

		render() {
			return (
				<div>
					<button type="button" value={this.props.value}>{_.upperCase(this.props.value)}</button>
				</div>
			)
		}
}

export default Category;