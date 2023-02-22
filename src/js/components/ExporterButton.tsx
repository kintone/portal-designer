import React from "react";

const ExporterButton = (props: ExporterButtonProps) => {
  return (
    <button
      type="button"
      className="action-export"
      onClick={props.onClick}
      aria-expanded={props.expanded}
    >
      {chrome.i18n.getMessage("kpd_export_button")}
    </button>
  );
};

interface ExporterButtonProps {
  onClick: (evt: React.MouseEvent) => void;
  expanded: boolean;
}

export default ExporterButton;
