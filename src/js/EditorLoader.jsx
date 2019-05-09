import React, { useContext, useEffect } from 'react';
import { EditorStore } from './EditorStore';
import Storage from './domain/Storage';
import { convertStorageToState } from './domain/StorageConverter';
import EditorPage from './editorpage';

const EditorLoader = () => {
  const { dispatch } = useContext(EditorStore);

  const loadStorage = async () => {
    const storageValue = await Storage.getAll();
    const newState = convertStorageToState(storageValue);
    dispatch({ type: 'LOAD_STORAGE', state: newState });
  };

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <EditorPage />
  );
};

export default EditorLoader;
