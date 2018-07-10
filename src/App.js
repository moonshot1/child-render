import React, { Component } from 'react';
import SimpleTextareaCount from './SimpleTextareaCount';
import MultiComponentTextareaCount from './MultiComponentTextareaCount';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <SimpleTextareaCount/> */}
        <MultiComponentTextareaCount/>
      </div>
    );
  }
}

export default App;
