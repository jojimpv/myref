import React, { Component } from 'react';
import './App.css';
import Qinfo from './qinfo/Qinfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Qinfo></Qinfo>
        </div>
        <div className="App-content">
          {/* App content */}
        </div>
      </div>
    );
  }
}

export default App;
