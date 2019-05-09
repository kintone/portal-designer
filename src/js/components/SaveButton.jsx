import React from 'react';
import PropTypes from 'prop-types';
import Storage from '../domain/Storage';
import { convertStateToStorage } from '../domain/StorageConverter';

const SaveButton = (props) => {
  const onClick = async (state) => {
    const storageValue = convertStateToStorage(state);
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
