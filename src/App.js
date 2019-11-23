import React, {Component} from 'react';
import {
  Link,
  Route,
  HashRouter as Router
} from 'react-router-dom';
import './App.css';
import HowTo from "./HowTo";
import {FormattedMessage} from 'react-intl';
import "@fortawesome/fontawesome-free/js/all.min.js";

class App extends Component {
  render() {
    const top = () => {
      return (
        <Link to="/howto"><FormattedMessage id="howto.title"/></Link>
      );
    };

    return (
      <div>
        <Router>
          <Route exact path="/" render={top}/>
          <Route exact path="/howto" render={() => <HowTo/>}/>
        </Router>
      </div>
    );
  }
}

export default App;
