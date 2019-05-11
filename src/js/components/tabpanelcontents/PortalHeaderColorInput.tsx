import React from "react";
import ColorInput, { ColorInputProps } from "../ColorInput";

const PortalHeaderColorInput = (props: PortalHeaderColorInputProps) => (
  <ColorInput
    {...props}
    label="Portal Header Color"
    className="config-tabpanel-color-input"
    placeholder="Example: #ffcc00"
  />
);

export interface PortalHeaderColorInputProps extends ColorInputProps {}

export default PortalHeaderColorInput;
