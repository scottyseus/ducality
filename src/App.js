import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import MainMenu from './components/MainMenu';
import RealmContainer from './containers/RealmContainer';

import Play from './routes/Play';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" component={MainMenu}/>
          <Route exact path="/play/" component={RealmContainer}/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
