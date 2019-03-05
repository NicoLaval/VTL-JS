import React, { Component } from 'react';
import Title from 'components/shared/title';
import TextAreaHtml from 'components/shared/text-area-html';
//import Button from 'components/shared/button';
import D from 'i18n';
import VtlExample from 'utils/example';

class Advanced extends Component {
  constructor() {
    super();
    this.state = { forcedValue: '' };
    this.handleClickExample = () => this.setState({ forcedValue: VtlExample });
  }

  render() {
    const { forcedValue } = this.state;
    return (
      <>
        <Title label={D.advancedTitle} />
        <TextAreaHtml forcedValue={forcedValue} />
        {/*<div>
          <Button label={D.exampleBtn} onClick={this.handleClickExample} />
        </div> */}
      </>
    );
  }
}

export default Advanced;
