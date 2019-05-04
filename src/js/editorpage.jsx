import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Activator from './components/Activator';
import NameInput from './components/NameInput';
import EditorTabs from './components/Tabs';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
      name: '',
    };
  }

  handleNameInputChange(name) {
    this.setState({ name });
  }

  handleActivatorChange(enabled) {
    this.setState({ enabled });
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
          <NameInput onChange={name => this.handleNameInputChange(name)} name={this.state.name} />
        </div>
        <EditorTabs />
      </div>
    );
  }
}

ReactDOM.render(
  <EditorPage />,
  document.querySelector('.wrapper'),
);
