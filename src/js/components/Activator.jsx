import React from 'react';
import PropTypes from 'prop-types';

const Activator = (props) => {
  // TODO: インスタンスごとに異なる値にする
  const generateCheckBoxId = () => 'action-enable-customized-portal-input';

  const handleChange = (evt) => {
    props.onChange(evt.target.checked);
  };

  return (
    <div className="action-enable-customized-portal">
      <input
        type="checkbox"
        className="action-enable-customized-portal-input"
        id={generateCheckBoxId()}
        checked={props.enabled}
        onChange={evt => handleChange(evt)}
      />
      <label // eslint-disable-line
        htmlFor={generateCheckBoxId()}
        className="action-enable-customized-portal-label"
      >
      Enable customized portal
      </label>
    </div>
  );
};

Activator.propTypes = {
  enabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Activator.defaultProps = {
  enabled: false,
};

export default Activator;
