import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Title } from 'components/shared';
import D from 'i18n';
import './monaco.scss';

class Monaco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
    this.onChange = (newValue, e) => console.log('onChange', newValue, e);
    this.editorDidMount = (editor, monaco) => {
      console.log('editorDidMount', editor);
      editor.focus();
    };
  }

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <>
        <Title label={D.monacoTitle} />
        <div className="monaco">
          <MonacoEditor
            // width="800"
            height="400"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </div>
      </>
    );
  }
}

export default Monaco;
