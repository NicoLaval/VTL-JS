import React from 'react';
import PropTypes from 'prop-types';
import { Editor, CompositeDecorator } from 'draft-js';
import { editorStateFromHtmlWithDecorator, plainTextFromEditorState } from 'utils/html';
import 'draft-js/dist/Draft.css';
import './text-area-html.scss';

function findVariable(contentBlock, callback) {
  const regex = /[a-zA-Z]*=/g;

  const text = contentBlock.getText();
  let matchArr;
  let start;
  // eslint-disable-next-line no-cond-assign
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length - 1);
  }
}

function findValue(contentBlock, callback) {
  const regex = /=[a-zA-Z]*/g;

  const text = contentBlock.getText();
  let matchArr;
  let start;
  // eslint-disable-next-line no-cond-assign
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start + 1, start + matchArr[0].length);
  }
}

function handleVariableStrategy(contentBlock, callback) {
  findVariable(contentBlock, callback);
}

function handleValueStrategy(contentBlock, callback) {
  findValue(contentBlock, callback);
}

const handleVariable = props => {
  return (
    <>
      <strong style={{ background: 'red' }}>{props.children}</strong>
    </>
  );
};

const handleValue = props => {
  return (
    <>
      <strong style={{ background: 'blue' }}>{props.children}</strong>
    </>
  );
};

class TextAreaHtml extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.compositeDecorator = new CompositeDecorator([
      {
        strategy: handleVariableStrategy,
        component: handleVariable,
      },
      {
        strategy: handleValueStrategy,
        component: handleValue,
      },
    ]);

    this.state = { editorState: editorStateFromHtmlWithDecorator(value, this.compositeDecorator) };
    this.onChange = editorState => {
      const { handleChange } = this.props;
      handleChange(plainTextFromEditorState(editorState));
      this.setState({ editorState });
    };
  }

  static getDerivedStateFromProps({ update, value }) {
    if (update) {
      return {
        editorState: editorStateFromHtmlWithDecorator(value, {
          decorator: this.compositeDecorator,
        }),
      };
    }
    return null;
  }

  render() {
    const { editorState } = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}

export default TextAreaHtml;

TextAreaHtml.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
