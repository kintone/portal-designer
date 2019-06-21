import React from "react";
import ColorInput, { ColorInputProps } from "../ColorInput";

const ToolbarColorInput = (props: ToolbarColorInputProps) => (
  <ColorInput
    {...props}
    label={chrome.i18n.getMessage("kpd_unofficial_toolbar_color")}
    className="config-tabpanel-color-input"
    placeholder={chrome.i18n.getMessage(
      "kpd_unofficial_toolbar_color_placeholder"
    )}
  />
);

export interface ToolbarColorInputProps extends ColorInputProps {}

export default ToolbarColorInput;
