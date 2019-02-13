import React, { Component } from 'react';
import marked from "marked";
import './App.css';

class MyMarkdown extends React.Component {
  render () {
    return <div>{marked('# Marked in browser\n\nRendered by **marked**.')}</div>
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Markdown Previewer</h1>
          <div className="previewer">
            <textarea id="editor"></textarea>
            
            <div id="preview"><MyMarkdown/></div>
            
          </div>

        </header>
        
        
      </div>
    );
  }
}


export default App;


