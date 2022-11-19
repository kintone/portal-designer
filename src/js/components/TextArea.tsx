// / <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

import React from "react";

const TextArea = (props: TextAreaProps) => {
  return <textarea />;
};

export interface TextAreaProps {
  label: string;
  language: string;
  value: string;
  onChange: (value: string) => void;
}

export default TextArea;
