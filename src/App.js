import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import MainMenu from './components/MainMenu';
import RealmContainer from './containers/RealmContainer';
import MapPicker from './components/MapPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" component={MainMenu}/>
          <Route exact path="/play/" component={RealmContainer}/>
          <Route exact path="/maps/" component={MapPicker}/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
