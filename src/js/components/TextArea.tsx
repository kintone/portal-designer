// / <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />

import React from "react";
// import * as monaco from "monaco-editor";
import * as monaco from "monaco-editor";

class TextArea extends React.Component<TextAreaProps> {
  containerRef: React.RefObject<HTMLDivElement>;
  monacoEditor: monaco.editor.IStandaloneCodeEditor | null;
  triggerChangeEvent: boolean;
  currentValue: string;

  static defaultProps = {
    value: ""
  };

  constructor(props: TextAreaProps) {
    super(props);
    this.containerRef = React.createRef();
    this.monacoEditor = null;
    this.triggerChangeEvent = true;
    this.currentValue = this.props.value;
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    const container = this.containerRef.current;
    if (!container) {
      return;
    }
    monaco.languages.html.htmlDefaults.setOptions({
      format: Object.assign(
        {},
        monaco.languages.html.htmlDefaults.options.format,
        { tabSize: 2, insertSpaces: true }
      )
    });
    this.monacoEditor = monaco.editor.create(container, {
      value: this.props.value,
      language: this.props.language,
      ariaLabel: this.props.label,
      theme: "vs-dark",
      fontSize: 20,
      minimap: { enabled: false }
    });
    this.monacoEditor
      .getModel()!
      .updateOptions({ tabSize: 2, insertSpaces: true });
    this.monacoEditor.onDidChangeModelContent(() => {
      const value = this.monacoEditor!.getValue();
      this.currentValue = value;
      if (this.triggerChangeEvent) {
        this.props.onChange(value);
      }
    });

    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    if (this.currentValue !== this.props.value) {
      this.currentValue = this.props.value;
      if (this.monacoEditor) {
        this.triggerChangeEvent = false;
        this.monacoEditor.setValue(this.props.value);
        this.triggerChangeEvent = true;
      }
    }

    if (this.monacoEditor) {
      this.monacoEditor.layout();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.monacoEditor) {
      this.monacoEditor.dispose();
    }
  }

  handleResize() {
    setTimeout(() => {
      if (this.monacoEditor) {
        this.monacoEditor.layout();
      }
    }, 0);
  }

  render() {
    return <div ref={this.containerRef} className="tabpanel-input-container" />;
  }
}

export interface TextAreaProps {
  label: string;
  language: string;
  value: string;
  onChange: (value: string) => void;
}

export default TextArea;
