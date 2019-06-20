import React from "react";

const ExporterMenuItem = (props: ExporterMenuItemProps) => {
  return (
    <button
      type="button"
      role="menuitem"
      className="file-format-menu-item"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export interface ExporterMenuItemProps {
  label: string;
  onClick: (evt: React.MouseEvent) => void;
}

export default ExporterMenuItem;
