import React from "react";

const ImporterButton = (props: ImporterButtonProps) => {
  return (
    <button
      type="button"
      className="action-import"
      onClick={props.onClick}
      aria-expanded={props.expanded}
    >
      {chrome.i18n.getMessage("kpd_import_button")}
    </button>
  );
};

interface ImporterButtonProps {
  onClick: (evt: React.MouseEvent) => void;
  expanded: boolean;
}

export default ImporterButton;
