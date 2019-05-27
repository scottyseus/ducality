import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import MainMenu from './components/MainMenu';
import RealmContainer from './containers/RealmContainer';
import GameConfigurerContainer from './containers/GameConfigurerContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" component={MainMenu}/>
          <Route exact path="/play/" component={RealmContainer}/>
          <Route exact path="/configure/" component={GameConfigurerContainer}/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
