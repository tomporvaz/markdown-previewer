import React, { Component } from 'react';
import marked from "marked";
import './App.css';


/*a header (H1 size), a sub header (H2 size), 
a link, inline code, a code block, a list item, a blockquote, 
an image, and bolded text*/
const sampleText = "# Markdown"
+"\n\n## a simple markup language for writing text that is readable as-is"
+ "\n\nMarkdown uses special characters to convey additional meaning and formatting for text"
+  "\n\nWith two asterisks you can bold a word.  **This** is bold. One asterisk is for *italics.*"
+ "\n\nWith numbers you can write an ordered list"
+ "\n\n1. Bread \n2. Milk \n3. Eggs"
+ "\n\nAnd with * you can make a bulleted list: \n* no order \n* to this"
+ "\n\nI can even quote Shakespeare:"
+ "\n\n>There is nothing either good or bad, but thinking makes it so."
+ "\n>(Act II, Scene II)"
+ "\n\nBut of course, markdown is especially good for documenting code by using backticks `let x = 0`"
+ "\n\nCode block uses three back-ticks"
+ "\n\n```"
+ "\nmyMarkdown(markdown) {"
+ "\n  return {__html: marked(markdown)};"
+ "\n}"
+ "\n```"
+ "\n\nHere is an image!"
+ "\n\n![Makdown Image](https://visualpharm.com/assets/11/Markdown-595b40b75ba036ed117d6671.svg)"
+ "\n\n[Wikipedia](https://en.wikipedia.org/wiki/Markdown) has great article including its history"
+ ""
;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "input": sampleText,
      "output": this.myMarkdown(sampleText)
    };
    this.myMarkdown = this.myMarkdown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  myMarkdown(markdown) {
    return {__html: marked(markdown, {breaks: true})};
  } 
  
  handleChange(event) {
    const newOutput = this.myMarkdown(event.target.value);
    this.setState({
      input: event.target.value,
      output: newOutput
    });
    console.log("Input: " + this.state.input);
    console.log("Output:" + this.state.output);
  }
  
  
  
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Markdown Previewer</h1>
        </header>

        <div className="previewer">

          <div className="prevwSect">
            <h3>Type Markdown</h3>
            <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
          </div>
          
          <div className="prevwSect">
            <h3>Preview</h3>
            <div id="preview" dangerouslySetInnerHTML={this.state.output}></div>
          </div>

        </div>
      </div>
      );
    }
  }
  
  
  export default App;
  
  
  