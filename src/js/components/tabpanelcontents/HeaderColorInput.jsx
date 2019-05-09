import React from 'react';
import ColorInput from '../ColorInput';

const HeaderColorInput = props => (
  <ColorInput
    {...props}
    label="Header Color"
    className="config-tabpanel-color-input"
    placeholder="Example: #ffcc00"
  />
);

export default HeaderColorInput;
