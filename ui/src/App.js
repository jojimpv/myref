import React, { Component } from 'react';
import './App.css';

import SearchBar from './qinfo/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Qinfo
          <SearchBar></SearchBar>
        </div>
        <div className="App-content">
          App content
        </div>
      </div>
    );
  }
}

export default App;
