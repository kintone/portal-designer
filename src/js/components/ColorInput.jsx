import React from 'react';
import PropTypes from 'prop-types';

const ColorInput = (props) => {
  const handleChange = (evt) => {
    props.onChange(evt.target.value);
  };

  // TODO: 一意な値にする
  const getId = () => props.className;

  return (
    <label htmlFor={getId()}>
      <span className={`${props.className}-label-text`}>{props.label}</span>
      <input
        type="text"
        id={getId()}
        className={props.className}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={handleChange}
      />
    </label>
  );
};

ColorInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

ColorInput.defaultProps = {
  className: 'color-input',
  value: '',
  disabled: false,
  placeholder: '',
};

export default ColorInput;
