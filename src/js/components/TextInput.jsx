import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const handleChange = (evt) => {
    props.onChange(evt.target.value);
  };

  return (
    <input
      className={props.className}
      type="text"
      placeholder={props.placeholder}
      aria-label={props.label}
      value={props.value}
      onChange={handleChange}
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  className: 'text-input',
  value: '',
  placeholder: '',
};

export default TextInput;
