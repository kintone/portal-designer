import React from 'react';
import ColorInput from '../ColorInput';

const ToolbarColorInput = props => (
  <ColorInput
    {...props}
    label="Toolbar Color"
    className="config-tabpanel-color-input"
  />

);

export default ToolbarColorInput;
