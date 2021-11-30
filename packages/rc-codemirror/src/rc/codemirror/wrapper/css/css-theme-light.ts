import {
  css
} from 'styled-components';

// codemirror/theme/mdn-like.css
export default css`
  /* stylelint-disable selector-class-pattern */
  .cm-s-mdn-like.CodeMirror {
    background-color: #fff;
    background-image: url(data:image/png;base64,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);
    color: #999;
  }
  
  .cm-s-mdn-like div.CodeMirror-selected {
    background: #cfc;
  }
  
  .cm-s-mdn-like .CodeMirror-line::selection,
  .cm-s-mdn-like .CodeMirror-line > span::selection,
  .cm-s-mdn-like .CodeMirror-line > span > span::selection {
    background: #cfc;
  }
  
  .cm-s-mdn-like .CodeMirror-gutters {
    border-left: 6px solid rgba(0, 83, 159, 0.65);
    background: #f8f8f8;
    color: #333;
  }
  
  .cm-s-mdn-like .CodeMirror-linenumber {
    padding-left: 8px;
    color: #aaa;
  }
  
  .cm-s-mdn-like .CodeMirror-cursor {
    border-left: 2px solid #222;
  }
  
  .cm-s-mdn-like .cm-keyword {
    color: #6262ff;
  }
  
  .cm-s-mdn-like .cm-atom {
    color: #f90;
  }
  
  .cm-s-mdn-like .cm-number {
    color: #ca7841;
  }
  
  .cm-s-mdn-like .cm-def {
    color: #8da6ce;
  }
  
  .cm-s-mdn-like span.cm-variable-2,
  .cm-s-mdn-like span.cm-tag {
    color: #690;
  }
  
  .cm-s-mdn-like span.cm-variable-3,
  .cm-s-mdn-like span.cm-def,
  .cm-s-mdn-like span.cm-type {
    color: #07a;
  }
  
  .cm-s-mdn-like .cm-variable {
    color: #07a;
  }
  
  .cm-s-mdn-like .cm-property {
    color: #905;
  }
  
  .cm-s-mdn-like .cm-qualifier {
    color: #690;
  }
  
  .cm-s-mdn-like .cm-operator {
    color: #cda869;
  }
  
  .cm-s-mdn-like .cm-comment {
    font-weight: 400;
    color: #777;
  }
  
  .cm-s-mdn-like .cm-string {
    font-style: italic;
    color: #07a;
  }
  
  .cm-s-mdn-like .cm-string-2 {
    color: #bd6b18;
  }
  
  .cm-s-mdn-like .cm-meta {
    color: #000;
  }
  
  .cm-s-mdn-like .cm-builtin {
    color: #9b7536;
  }
  
  .cm-s-mdn-like .cm-tag {
    color: #997643;
  }
  
  .cm-s-mdn-like .cm-attribute {
    color: #d6bb6d;
  }
  
  .cm-s-mdn-like .cm-header {
    color: #ff6400;
  }
  
  .cm-s-mdn-like .cm-hr {
    color: #aeaeae;
  }
  
  .cm-s-mdn-like .cm-link {
    font-style: italic;
    text-decoration: none;
    color: #ad9361;
  }
  
  .cm-s-mdn-like .cm-error {
    border-bottom: 1px solid #f00;
  }
  
  div.cm-s-mdn-like .CodeMirror-activeline-background {
    background: #efefff;
  }
  
  div.cm-s-mdn-like span.CodeMirror-matchingbracket {
    outline: 1px solid #808080;
    color: inherit;
  }
`;
