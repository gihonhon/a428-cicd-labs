import React, { Component } from 'react';
import Header from './components/header/header';
import MainContent from './components/mainContent/mainContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
