import React, {Component} from 'react';
import Header from './Header.jsx';
import BodyContainer from './containers/BodyContainer.jsx';
import manageApp from './reducers/index.jsx';

class App extends Component {
  render() {
    return (
    	<div>
      	<Header />
      	<BodyContainer />
    	</div>
    );
  }
}
export default App;
