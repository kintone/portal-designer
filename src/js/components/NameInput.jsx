import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameInput extends Component {
  handleChange(evt) {
    console.log(evt.target.value);
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <input
        className="name-input"
        type="text"
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
