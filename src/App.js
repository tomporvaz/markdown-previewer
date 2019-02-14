import React, { Component } from 'react';
import marked from "marked";
import './App.css';



const myMarkdown = () => {
  return {__html: marked('# Marked in browser\n\nRendered by **marked**.')};
} 

const sampleText = '# Marked in browser\n\nRendered by **marked**.';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "input": sampleText,
      "output": myMarkdown()
    };
    this.convert = this.convert.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  convert() {
    this.setState({
      output: this.state.input 
    })
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
    console.log("Input: " + this.state.input);
    console.log("Output:" + this.state.output);
  }
  
  
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Markdown Previewer</h1>
      <div className="previewer">
      <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
    
      <div id="preview" dangerouslySetInnerHTML={this.state.output}></div>
      
      </div>
      
      </header>
      
      
      </div>
      );
    }
  }
  
  
  export default App;
  
  
  