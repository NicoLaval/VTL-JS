import { EditorState } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';

export const plainTextFromEditorState = editorState =>
  editorState.getCurrentContent().getPlainText();

export const editorStateFromHtml = html => EditorState.createWithContent(stateFromHTML(html));
export const editorStateFromHtmlWithDecorator = (html, decorator) =>
  EditorState.createWithContent(stateFromHTML(html), decorator);

// TODO : build html thanks to input and variables array
export const buildHtml = input => input;
