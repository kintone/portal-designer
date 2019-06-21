import React from "react";
import ColorInput, { ColorInputProps } from "../ColorInput";

const PortalHeaderColorInput = (props: PortalHeaderColorInputProps) => (
  <ColorInput
    {...props}
    label={chrome.i18n.getMessage("kpd_unofficial_portal_header_color")}
    className="config-tabpanel-color-input"
    placeholder={chrome.i18n.getMessage(
      "kpd_unofficial_portal_header_color_placeholder"
    )}
  />
);

export interface PortalHeaderColorInputProps extends ColorInputProps {}

export default PortalHeaderColorInput;
