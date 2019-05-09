import React, { Component } from 'react';
import Activator from './containers/Activator';
import SaveButton from './components/SaveButton';
import CancelButton from './components/CancelButton';
import NameInput from './containers/NameInput';
import Importer from './components/Importer';
import Exporter from './components/Exporter';
import Tabs from './components/Tabs';
import Storage from './domain/Storage';
import { convertStorageToState } from './domain/StorageConverter';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const storageValue = await Storage.getAll();
    const newState = convertStorageToState(storageValue);
    this.setState(newState);
  }

  handleImport(state) {
    this.setState(state);
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
          <NameInput />
          <Importer onImport={stateFragment => this.handleImport(stateFragment)} />
          <Exporter state={this.state} />
        </div>
        <Tabs />
      </div>
    );
  }
}

export default EditorPage;
