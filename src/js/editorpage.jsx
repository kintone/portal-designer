import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Activator from './components/Activator';
import NameInput from './components/NameInput';
import Tabs from './components/Tabs';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
      name: '',
      editor: {
        html: {
          value: '<div class="sample"></div>',
        },
        css: {
          value: '.sample { color: red; }',
        },
        js: {
          value: 'console.log(\'hello, portal.\')',
        },
        headerColor: '#000000',
        toolbarColor: '#ffffff',
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

  handleNameInputChange(name) {
    this.setState({ name });
  }

  handleActivatorChange(enabled) {
    this.setState({ enabled });
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

  handleSave() {
    console.log(this.state);
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
