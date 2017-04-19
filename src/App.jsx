import React, {Component} from 'react';
import Header from './components/Header.jsx';
import BodyContainer from './containers/BodyContainer.jsx';

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
