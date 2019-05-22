import React from "react";

const ExporterButton = (props: ExporterButtonProps) => {
  return (
    <button
      type="button"
      className="action-export"
      onClick={props.onClick}
      aria-expanded={props.expanded}
    >
      Export
    </button>
  );
};

interface ExporterButtonProps {
  onClick: (evt: React.MouseEvent) => void;
  expanded: boolean;
}

export default ExporterButton;
