import React from 'react';
import PropTypes from 'prop-types';

const Exporter = props => (
  <button
    type="button"
    className="action-export"
    onClick={props.onExport}
  >
    Export
  </button>
);

Exporter.propTypes = {
  onExport: PropTypes.func.isRequired,
};

export default Exporter;
