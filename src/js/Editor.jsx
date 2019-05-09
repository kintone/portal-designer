import React from 'react';
import ReactDOM from 'react-dom';
import { EditorProvider } from './EditorStore';
import EditorLoader from './EditorLoader';

const Editor = () => (
  <EditorProvider>
    <EditorLoader />
  </EditorProvider>
);

ReactDOM.render(
  <Editor />,
  document.querySelector('.wrapper'),
);
