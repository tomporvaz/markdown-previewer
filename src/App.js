import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Markdown Previewer</h1>
          <div className="previewer">
            <textarea id="editor"></textarea>
            <div id="preview">Tom is awesome!!!!</div>
          </div>

        </header>
        
        
      </div>
    );
  }
}

export default App;
