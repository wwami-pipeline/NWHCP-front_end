import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <header className="appHeader">
            <h1 className="appTitle">WWAMI Pipeline</h1>
          </header>
          <div className="seachBox">
              <p>Seach Box</p>
          </div>
          <div className="resultsBox">
            <p>results that are visible on the map shown here as cards</p>
          </div>
          <div className="mapBox">
            <p>map goes here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
