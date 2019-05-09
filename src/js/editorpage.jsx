import React, { Component } from 'react';
import Activator from './containers/Activator';
import SaveButton from './components/SaveButton';
import CancelButton from './components/CancelButton';
import NameInput from './components/NameInput';
import Importer from './components/Importer';
import Exporter from './components/Exporter';
import Tabs from './components/Tabs';
import Storage from './domain/Storage';
import { convertStorageToState } from './domain/StorageConverter';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },
    };
    this.editorHandler = {
      onHtmlChange: this.handleHtmlChange.bind(this),
      onCssChange: this.handleCssChange.bind(this),
      onJsChange: this.handleJsChange.bind(this),
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

  handleImport(state) {
    this.setState(state);
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

  render() {
    return (
      <div>
        <div className="global-nav">
          <div className="global-nav-name">
            <Activator />
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
          <Exporter state={this.state} />
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
