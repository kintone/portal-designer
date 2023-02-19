import React from "react";
import { Button } from "./Button";

const ImporterButton = (props: ImporterButtonProps) => {
  return (
    <Button
      variant="normal"
      label={chrome.i18n.getMessage("kpd_import_button")}
      onClick={props.onClick}
      ariaExpanded={props.expanded}
    />
  );
};

interface ImporterButtonProps {
  onClick: (evt: React.MouseEvent) => void;
  expanded: boolean;
}

export default ImporterButton;
