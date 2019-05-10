import React from "react";
import ColorInput from "../ColorInput";

const PortalHeaderColorInput = props => (
  <ColorInput
    {...props}
    label="Portal Header Color"
    className="config-tabpanel-color-input"
    placeholder="Example: #ffcc00"
  />
);

export default PortalHeaderColorInput;
