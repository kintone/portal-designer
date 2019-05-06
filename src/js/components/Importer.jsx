import React from 'react';
import PropTypes from 'prop-types';
import { convertTextToStateFragment } from '../domain/TextConverter';

class Importer extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.reader = new FileReader();
    this.reader.addEventListener('load', evt => this.handleLoadFile(evt));
  }

  handleLoadFile(evt) {
    const text = evt.target.result;
    const stateFragment = convertTextToStateFragment(text);
    this.props.onImport(stateFragment);
  }

  handleChange(evt) {
    this.reader.readAsText(evt.target.files[0]);
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <label className="action-import-label">
        <input
          type="file"
          accept=".json"
          className="action-import"
          onChange={evt => this.handleChange(evt)}
          ref={this.inputRef}
        />
        Import
      </label>
    );
  }
}

Importer.propTypes = {
  onImport: PropTypes.func.isRequired,
};

export default Importer;
