import React from "react";
import ColorInput, { ColorInputProps } from "../ColorInput";

const HeaderColorInput = (props: HeaderColorInputProps) => (
  <ColorInput
    {...props}
    label="Header Color"
    className="config-tabpanel-color-input"
    placeholder="Example: #ffcc00"
  />
);

export interface HeaderColorInputProps extends ColorInputProps {}

export default HeaderColorInput;
