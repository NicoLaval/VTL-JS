import React, { Component } from 'react';
import { Title, TextArea, Button, Error } from 'components/shared';
import antlr4 from 'antlr4';
import { VtlLexer, VtlParser, SimpleErrorListener } from 'parsing';
import VtlExample from 'utils/example';
import D from 'i18n';

const parse = text => {
  const errors = [];
  const chars = new antlr4.InputStream(text);
  const lexer = new VtlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new VtlParser(tokens);
  parser.buildParseTrees = true;
  const listener = new SimpleErrorListener(errors);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  parser.start();
  return errors;
};

class Simple extends Component {
  constructor() {
    super();
    this.state = { input: '', errors: [] };
    this.handleChange = input => {
      this.setState({ input, errors: parse(input) });
    };
    this.handleClickExample = () => this.setState({ input: VtlExample, errors: parse(VtlExample) });
  }

  render() {
    const { input, errors } = this.state;
    const hasError = errors.length > 0;
    return (
      <>
        <Title label={D.simpleJSTitle} />
        <TextArea value={input} handleChange={this.handleChange} hasError={hasError} />
        <Button label={D.exampleBtn} onClick={this.handleClickExample} />
        {hasError && <Error errors={errors} />}
      </>
    );
  }
}

export default Simple;
