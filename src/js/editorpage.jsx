import React, { Component } from 'react';
import Activator from './components/Activator';
import SaveButton from './components/SaveButton';
import CancelButton from './components/CancelButton';
import NameInput from './components/NameInput';
import Importer from './components/Importer';
import Exporter from './components/Exporter';
import Tabs from './components/Tabs';
import Storage from './domain/Storage';
import { convertStateToText, convertTextToStateFragment } from './domain/TextConverter';
import { convertStorageToState } from './domain/StorageConverter';
import { exportFile } from './domain/FileExporter';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
      name: '',
      editor: {
        html: {
          value: '',
        },
        css: {
          value: '',
        },
        js: {
          value: '',
        },
        headerColor: '',
        toolbarColor: '',
      },
    };
    this.editorHandler = {
      onHtmlChange: this.handleHtmlChange.bind(this),
      onCssChange: this.handleCssChange.bind(this),
      onJsChange: this.handleJsChange.bind(this),
      onHeaderColorChange: this.handleHeaderColorChange.bind(this),
      onToolbarColorChange: this.handleToolbarColorChange.bind(this),
    };
  }

  async componentDidMount() {
    const storageValue = await Storage.getAll();
    const newState = convertStorageToState(storageValue);
    this.setState(newState);
  }

  handleNameInputChange(name) {
    this.setState({ name });
  }

  handleActivatorChange(enabled) {
    this.setState({ enabled });
  }

  handleImport(text) {
    this.setState(convertTextToStateFragment(text));
  }

  handleExport() {
    exportFile(convertStateToText(this.state), this.state.name);
  }

  handleHtmlChange(value) {
    this.setState((prevState) => {
      const { editor } = prevState;
      const { html } = editor;
      html.value = value;
      return { editor };
    });
  }

  handleCssChange(value) {
    this.setState((prevState) => {
      const { editor } = prevState;
      const { css } = editor;
      css.value = value;
      return { editor };
    });
  }

  handleJsChange(value) {
    this.setState((prevState) => {
      const { editor } = prevState;
      const { js } = editor;
      js.value = value;
      return { editor };
    });
  }

  handleHeaderColorChange(value) {
    this.setState((prevState) => {
      const { editor } = prevState;
      editor.headerColor = value;
      return { editor };
    });
  }

  handleToolbarColorChange(value) {
    this.setState((prevState) => {
      const { editor } = prevState;
      editor.toolbarColor = value;
      return { editor };
    });
  }

  render() {
    return (
      <div>
        <div className="global-nav">
          <div className="global-nav-name">
            <Activator
              onChange={enabled => this.handleActivatorChange(enabled)}
              enabled={this.state.enabled}
            />
          </div>
          <CancelButton />
          <SaveButton state={this.state} />
        </div>
        <div className="local-nav">
          <NameInput
            onChange={name => this.handleNameInputChange(name)}
            name={this.state.name}
          />
          <Importer onImport={stateFragment => this.handleImport(stateFragment)} />
          <Exporter onExport={() => this.handleExport()} />
        </div>
        <Tabs
          editor={this.state.editor}
          editorHandler={this.editorHandler}
        />
      </div>
    );
  }
}

export default EditorPage;
