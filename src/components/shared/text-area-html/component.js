import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'draft-js';
import { editorStateFromHtml, plainTextFromEditorState } from 'utils/html';
import 'draft-js/dist/Draft.css';
import './text-area-html.scss';
import { stateToHTML } from 'draft-js-export-html';

class TextAreaHtml extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = { editorState: editorStateFromHtml(value) };
    this.onChange = editorState => {
      const { handleChange } = this.props;
      handleChange(plainTextFromEditorState(editorState));
      this.setState({ editorState });
    };
  }

  static getDerivedStateFromProps({ update, value }) {
    if (update) {
      return {
        editorState: editorStateFromHtml(value),
      };
    }
    return null;
  }

  render() {
    const { editorState } = this.state;
    console.log(stateToHTML(editorState.getCurrentContent()));
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
}

export default TextAreaHtml;

TextAreaHtml.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
