import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Activator from './components/Activator';
import NameInput from './components/NameInput';
import Importer from './components/Importer';
import Exporter from './components/Exporter';
import Tabs from './components/Tabs';
import Storage from './domain/Storage';
import { convertStateToText } from './domain/TextConverter';
import { convertStateToStorage, convertStorageToState } from './domain/StorageConverter';

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

  async handleSave() {
    const storageValue = convertStateToStorage(this.state);
    await Storage.set(storageValue);
  }

  handleNameInputChange(name) {
    this.setState({ name });
  }

  handleActivatorChange(enabled) {
    this.setState({ enabled });
  }

  handleImport(stateFragment) {
    this.setState(stateFragment);
  }

  handleExport() {
    const filename = 'customize.json';
    const text = convertStateToText(this.state);

    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${text}`);
    element.setAttribute('download', filename);
    element.setAttribute('hidden', 'hidden');

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
          <button type="button" className="action-save" onClick={() => this.handleSave()}>Save</button>
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

ReactDOM.render(
  <EditorPage />,
  document.querySelector('.wrapper'),
);
