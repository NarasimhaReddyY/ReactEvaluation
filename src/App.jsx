import React, {Component} from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import manageApp from './reducers/index.jsx';

class App extends Component {
  render() {
    return (
    	<div>
      	<Header />
      	<Body />
    	</div>
    );
  }
}
export default App;
