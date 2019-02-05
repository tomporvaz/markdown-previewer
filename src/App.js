import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Markdown Previewer</h1>
          <p>Test paragraph</p>
          <textarea id="editor"></textarea>
        </header>
        
        
      </div>
    );
  }
}

export default App;
