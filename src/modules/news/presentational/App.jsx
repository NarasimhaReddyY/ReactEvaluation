import React, {Component} from 'react';
import BodyContainer from '../container/BodyContainer.jsx';
import Header from './Header.jsx';

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
