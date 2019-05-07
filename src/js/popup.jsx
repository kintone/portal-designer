import React from 'react';
import ReactDOM from 'react-dom';
import Storage from './domain/Storage';
import Popup from './components/Popup';
import { convertStorageToType } from './domain/StorageConverter';

const onTypeChange = (type) => {
  Storage.set({ type });
};

const initialize = async () => {
  const type = convertStorageToType(await Storage.getAll());
  ReactDOM.render(
    <Popup type={type} onChange={onTypeChange} />,
    document.querySelector('.wrapper'),
  );
};

initialize();
