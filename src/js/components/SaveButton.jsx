import React, { useContext } from 'react';
import { EditorStore } from '../EditorStore';
import Storage from '../domain/Storage';
import { convertStateToStorage } from '../domain/StorageConverter';

const SaveButton = () => {
  const { state } = useContext(EditorStore);

  const onClick = async () => {
    await Storage.set(convertStateToStorage(state));
  };

  return (
    <button
      type="button"
      className="action-save"
      onClick={onClick}
    >
    Save
    </button>
  );
};

export default SaveButton;
