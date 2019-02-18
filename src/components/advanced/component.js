import React, { Component } from 'react';
import antlr4 from 'antlr4';
import Title from 'components/shared/title';
import TextAreaHtml from 'components/shared/text-area-html';
import Button from 'components/shared/button';
import D from 'i18n';
import { VtlLexer, VtlParser, CustomVtlVisitor } from 'parsing';
import VtlExample from 'utils/example';
import { buildHtml } from 'utils/html';

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

class Advanced extends Component {
  constructor() {
    super();
    this.state = { input: '', variables: [], update: false };
    this.handleChange = input => {
      this.setState({ input, update: false });
      if (!input) this.setState({ variables: [] });
      else visitStart(input)(this.handleChangeVariables);
    };
    this.handleClickExample = () => this.setState({ input: VtlExample, update: true });
    this.handleChangeVariables = variables => this.setState({ variables });
  }

  render() {
    const { input, variables, update } = this.state;
    return (
      <>
        <Title label={D.advancedTitle} />
        Hello 2
        <TextAreaHtml value={buildHtml(input)} handleChange={this.handleChange} update={update} />
        <div>
          <Button label={D.exampleBtn} onClick={this.handleClickExample} />
        </div>
        {variables.length > 0 && <div>Variables :</div>}
        <ul>
          {variables.map(v => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Advanced;
