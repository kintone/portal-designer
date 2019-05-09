import React from 'react';
import Activator from './containers/Activator';
import SaveButton from './components/SaveButton';
import CancelButton from './components/CancelButton';
import NameInput from './containers/NameInput';
import Importer from './components/Importer';
import Exporter from './components/Exporter';
import Tabs from './components/Tabs';

const EditorPage = () => (
  <div>
    <div className="global-nav">
      <div className="global-nav-name">
        <Activator />
      </div>
      <CancelButton />
      <SaveButton />
    </div>
    <div className="local-nav">
      <NameInput />
      <Importer />
      <Exporter />
    </div>
    <Tabs />
  </div>
);

export default EditorPage;
