import React from 'react';
import { Editor, CompositeDecorator } from 'draft-js';
import { editorStateFromHtmlWithDecorator, plainTextFromEditorState, buildHtml } from 'utils/html';
import 'draft-js/dist/Draft.css';
import './text-area-html.scss';
import antlr4 from 'antlr4';
import { VtlLexer, VtlParser, AdvancedVtlVisitor } from 'parsing';

const visitStart = text => handler => {
  const chars = new antlr4.InputStream(text);
  const lexer = new VtlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new VtlParser(tokens);
  parser.buildParseTrees = true;
  const ctx = parser.start();
  const visitor = new AdvancedVtlVisitor(handler);
  return visitor.visitStart(ctx);
};

const handleVariable = ({ children }) => {
  return (
    <>
      <strong style={{ color: '#ff337a' }}>{children}</strong>
    </>
  );
};

class TextAreaHtml extends React.Component {
  constructor(props) {
    super(props);
    this.decorator = new CompositeDecorator([
      {
        strategy: (contentBlock, callback) => {
          const { variables } = this.state;
          const text = contentBlock.getText();
          variables.forEach(c => {
            const start = text.indexOf(c);
            if (start >= 0) callback(start, start + c.length);
          });
        },
        component: handleVariable,
      },
    ]);
    this.state = {
      editorState: editorStateFromHtmlWithDecorator(buildHtml(''), this.decorator),
      variables: [],
    };
    this.handleChange = editorState => {
      const input = plainTextFromEditorState(editorState);
      if (!input) this.setState({ variables: [] });
      else visitStart(input)(this.handleChangeVariables);
      this.setState({ editorState });
    };
    this.handleChangeVariables = variables => {
      this.setState({ variables });
    };
  }

  render() {
    const { editorState } = this.state;
    return <Editor editorState={editorState} onChange={this.handleChange} />;
  }
}

export default TextAreaHtml;
