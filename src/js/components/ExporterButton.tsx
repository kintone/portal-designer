import React from "react";
import { Button } from "./Button";

const ExporterButton = (props: ExporterButtonProps) => {
  return (
    <Button
      variant="normal"
      label={chrome.i18n.getMessage("kpd_export_button")}
      onClick={props.onClick}
      ariaExpanded={props.expanded}
    />
  );
};

interface ExporterButtonProps {
  onClick: (evt: React.MouseEvent) => void;
  expanded: boolean;
}

export default ExporterButton;
