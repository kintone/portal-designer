import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {
  handleChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <input
        className="name-input"
        type="text"
        placeholder="Customized portal name"
        aria-label="Customized portal name"
        value={this.props.name}
        onChange={evt => this.handleChange(evt)}
      />
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

NameInput.defaultProps = {
  name: '',
};

export default NameInput;
