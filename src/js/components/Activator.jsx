import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const Activator = props => (
  <Checkbox
    {...props}
    checked={props.enabled}
    label="Enable customized portal"
    className="action-enable-customized-portal"
  />
);

Activator.propTypes = {
  enabled: PropTypes.bool,
};

Activator.defaultProps = {
  enabled: false,
};

export default Activator;
