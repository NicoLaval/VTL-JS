import React, { Component } from 'react';
import Title from 'components/shared/title';
import TextArea from 'components/shared/text-area';
import Button from 'components/shared/button';
import D from 'i18n';

class Tree extends Component {
  constructor() {
    super();
    this.state = { input: '' };
    this.handleChange = input => this.setState({ input });
    this.handleClick = () => {
      const { input } = this.state;
      console.log(input);
    };
  }

  render() {
    const { input } = this.state;
    return (
      <>
        <Title label={D.treeTitle} />
        <TextArea value={input} handleChange={this.handleChange} />
        <Button label={D.validationBtn} onClick={this.handleClick} />
      </>
    );
  }
}

export default Tree;
