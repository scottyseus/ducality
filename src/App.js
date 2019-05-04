import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RealmContainer from './containers/RealmContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RealmContainer/>
      </div>
    );
  }
}

export default App;
