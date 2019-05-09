import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditorStore } from '../EditorStore';
import Storage from '../domain/Storage';
import { convertStateToStorage } from '../domain/StorageConverter';
import mergeState from '../domain/mergeState';

const SaveButton = (props) => {
  const { state } = useContext(EditorStore);

  const onClick = async (pageState) => {
    const mergedState = mergeState(state, pageState);
    const storageValue = convertStateToStorage(mergedState);
    await Storage.set(storageValue);
  };

  return (
    <button
      type="button"
      className="action-save"
      onClick={() => onClick(props.state)}
    >
    Save
    </button>
  );
};

SaveButton.propTypes = {
  // TODO: 型定義する
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object.isRequired,
};

export default SaveButton;
