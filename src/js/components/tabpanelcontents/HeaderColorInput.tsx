import React from "react";
import ColorInput, { ColorInputProps } from "../ColorInput";

const HeaderColorInput = (props: HeaderColorInputProps) => (
  <ColorInput
    {...props}
    label={chrome.i18n.getMessage("kpd_unofficial_header_color")}
    className="config-tabpanel-color-input"
    placeholder={chrome.i18n.getMessage(
      "kpd_unofficial_header_color_placeholder"
    )}
  />
);

export interface HeaderColorInputProps extends ColorInputProps {}

export default HeaderColorInput;
