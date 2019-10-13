import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import HowTo from "./HowTo";
import {FormattedMessage} from 'react-intl';

class App extends Component {
  render() {
    return (
      <Router>
        <FormattedMessage id="help.text"/>
        <Route path="/howto" exact render={() => <HowTo/>}/>
      </Router>
    );
  }
}

export default App;
