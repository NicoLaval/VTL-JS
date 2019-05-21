import React, { Component } from 'react';
import { Title, TextArea, Button, Subtitle, Response } from 'components/shared';
import { getTree } from 'remote-api';
import D from 'i18n';
import VtlExample from 'utils/example';

class Simple extends Component {
  constructor() {
    super();
    this.state = { input: '', responseStatus: null, response: '' };
    this.handleChange = input => this.setState({ input, responseStatus: null, response: '' });
    this.handleClickExample = () => this.setState({ input: VtlExample });
    this.handleClick = () => {
      const { input } = this.state;
      getTree(input)
        .then(response => {
          if (!response.ok) this.setState({ responseStatus: 500 });
          else {
            this.setState({ responseStatus: 200 });
            return response.text();
          }
        })
        .then(response => this.setState({ response }));
    };
  }

  render() {
    const { input, responseStatus, response } = this.state;
    return (
      <>
        <Title label={D.simpleAPITitle} />
        <TextArea value={input} handleChange={this.handleChange} />
        <div>
          <Button label={D.exampleBtn} onClick={this.handleClickExample} />
          <Button label={D.validationBtn} onClick={this.handleClick} />
        </div>
        {input && responseStatus === 500 && <Subtitle label={D.APIError} />}
        {input && responseStatus === 200 && <Subtitle label={D.vtlValid} />}
        {input && response && <Response response={response} />}
      </>
    );
  }
}

export default Simple;
