import React from "react";
import ColorInput, { ColorInputProps } from "../ColorInput";

const ToolbarColorInput = (props: ToolbarColorInputProps) => (
  <ColorInput
    {...props}
    label="Toolbar Color"
    className="config-tabpanel-color-input"
    placeholder="Example: #4b4b4b"
  />
);

export interface ToolbarColorInputProps extends ColorInputProps {}

export default ToolbarColorInput;
