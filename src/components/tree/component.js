import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Title from 'components/shared/title';
import TextArea from 'components/shared/text-area';
import Button from 'components/shared/button';
import TreeComponent from 'components/shared/tree';
import D from 'i18n';
import antlr4 from 'antlr4';
import { VtlLexer, VtlParser, TreeVtlVisitor } from 'parsing';
import { buildTree } from 'utils/tree';
import VtlExample from 'utils/example';

const visitStart = text => getContext => {
  const chars = new antlr4.InputStream(text);
  const lexer = new VtlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new VtlParser(tokens);
  parser.buildParseTrees = true;
  const ctx = parser.start();
  const visitor = new TreeVtlVisitor(getContext);
  return visitor.visitStart(ctx);
};

class Tree extends Component {
  constructor() {
    super();
    this.state = { input: '', ctx: null };
    this.handleChange = input => this.setState({ input });
    this.handleClick = () => {
      const { input } = this.state;
      visitStart(input)(this.getContext);
    };
    this.handleClickExample = () => this.setState({ input: VtlExample });
    this.getContext = ctx => this.setState({ ctx });
  }

  render() {
    const { input, ctx } = this.state;
    return (
      <>
        <Title label={D.treeTitle} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={ctx ? 8 : 16}>
              <TextArea value={input} handleChange={this.handleChange} />
              <div>
                <Button label={D.exampleBtn} onClick={this.handleClickExample} />
                <Button label={D.validationBtn} onClick={this.handleClick} />
              </div>
            </Grid.Column>
            {ctx && <Grid.Column width={8}>{<TreeComponent tree={buildTree(ctx)} />}</Grid.Column>}
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Tree;
