import React from 'react';
import PropTypes from 'prop-types';

class Importer extends React.Component {
  constructor(props) {
    super(props);
    this.reader = new FileReader();
    this.reader.addEventListener('load', evt => this.handleLoadFile(evt));
  }

  handleLoadFile(evt) {
    this.props.onImport(evt.target.result);
  }

  handleChange(evt) {
    this.reader.readAsText(evt.target.files[0]);
  }

  render() {
    return (
      <label className="action-import-label" htmlFor="action-import-label">
        Import
        <input
          type="file"
          accept=".json"
          className="action-import"
          value=""
          onChange={evt => this.handleChange(evt)}
          id="action-import-label"
        />
      </label>
    );
  }
}

Importer.propTypes = {
  onImport: PropTypes.func.isRequired,
};

export default Importer;
