import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditorStore } from '../EditorStore';
import mergeState from '../domain/mergeState';
import { exportFile } from '../domain/FileExporter';
import { convertStateToText } from '../domain/TextConverter';

const Exporter = (props) => {
  const { state } = useContext(EditorStore);

  const handleExport = () => {
    const mergedState = mergeState(state, props.state);
    exportFile(convertStateToText(mergedState), mergedState.name);
  };

  return (
    <button
      type="button"
      className="action-export"
      onClick={handleExport}
    >
    Export
    </button>
  );
};

Exporter.propTypes = {
  // TODO: 型定義する
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object.isRequired,
};

export default Exporter;
