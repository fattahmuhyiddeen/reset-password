import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OccupancyProblem from './OccupancyProblem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <OccupancyProblem />
        </header>
      </div>
    );
  }
}

export default App;
