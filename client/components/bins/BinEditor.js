import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
// import 'codemirror/mode/javascript/javascript';

class BinEditor extends Component {
  onEditorChange(content) {
    Meteor.call('bins.update');
  }
  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default BinEditor;
