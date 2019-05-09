import React from 'react';
import PropTypes from 'prop-types';

const NameInput = (props) => {
  const handleChange = (evt) => {
    props.onChange(evt.target.value);
  };

  return (
    <input
      className="name-input"
      type="text"
      placeholder="Customized portal name"
      aria-label="Customized portal name"
      value={props.name}
      onChange={handleChange}
    />
  );
};

NameInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

NameInput.defaultProps = {
  name: '',
};

export default NameInput;
