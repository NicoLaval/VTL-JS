import React from 'react';
import PropTypes from 'prop-types';
import { Editor, CompositeDecorator } from 'draft-js';
import { editorStateFromHtmlWithDecorator, plainTextFromEditorState, buildHtml } from 'utils/html';
import 'draft-js/dist/Draft.css';
import './text-area-html.scss';
import antlr4 from 'antlr4';
import { VtlLexer, VtlParser, CustomVtlVisitor } from 'parsing';

const visitStart = text => handler => {
  const chars = new antlr4.InputStream(text);
  const lexer = new VtlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new VtlParser(tokens);
  parser.buildParseTrees = true;
  const ctx = parser.start();
  const visitor = new CustomVtlVisitor(handler);
  return visitor.visitStart(ctx);
};

const handleVariable = ({ children }) => {
  return (
    <>
      <strong style={{ background: '#ff337a' }}>{children}</strong>
    </>
  );
};

class TextAreaHtml extends React.Component {
  constructor(props) {
    super(props);
    this.handleVariableStrategy = (contentBlock, callback) => {
      const { variables } = this.state;
      const text = contentBlock.getText();
      variables.forEach(c => {
        const start = text.indexOf(c);
        callback(start, start + c.length);
      });
    };
    this.state = {
      editorState: editorStateFromHtmlWithDecorator(
        buildHtml(''),
        new CompositeDecorator([
          {
            strategy: this.handleVariableStrategy,
            component: handleVariable,
          },
        ])
      ),
      variables: [],
    };
    this.handleChange = editorState => {
      const input = plainTextFromEditorState(editorState);
      if (!input) this.setState({ variables: [] });
      else visitStart(input)(this.handleChangeVariables);
      this.setState({
        editorState: editorStateFromHtmlWithDecorator(
          buildHtml(input),
          new CompositeDecorator([
            {
              strategy: this.handleVariableStrategy,
              component: handleVariable,
            },
          ])
        ),
      });
    };
    this.handleChangeVariables = variables => this.setState({ variables });
  }

  render() {
    const { editorState, variables } = this.state;
    console.log(variables);
    return <Editor editorState={editorState} onChange={this.handleChange} />;
  }
}

export default TextAreaHtml;
