import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const handleChange = (evt) => {
    props.onChange(evt.target.value);
  };

  return (
    <textarea
      className={props.className}
      name={props.name}
      aria-label={props.label}
      value={props.value}
      onChange={handleChange}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  className: 'textarea',
  name: '',
  value: '',
};

export default TextArea;
