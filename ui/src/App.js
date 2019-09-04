import React, { Component } from 'react';
import './App.css';
import Qinfo from './qinfo/Qinfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-content">
          <Qinfo></Qinfo>
        </div>
      </div>
    );
  }
}

export default App;
