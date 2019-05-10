import React from "react";
import PropTypes from "prop-types";

const Checkbox = props => {
  // TODO: インスタンスごとに異なる値にする
  const generateCheckBoxId = () => props.className;

  const handleChange = evt => {
    props.onChange(evt.target.checked);
  };

  return (
    <div className={props.className}>
      <input
        type="checkbox"
        id={generateCheckBoxId()}
        className={`${props.className}-input`}
        checked={props.checked}
        onChange={evt => handleChange(evt)}
      />
      <label // eslint-disable-line
        htmlFor={generateCheckBoxId()}
        className={`${props.className}-label`}
      >
        {props.label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  checked: false,
  className: "checkbox"
};

export default Checkbox;
