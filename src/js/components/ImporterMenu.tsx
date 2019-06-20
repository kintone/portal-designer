import React from "react";
import MenuItem from "./MenuItem";

const ImporterMenu = (props: ImporterMenuProps) => {
  const importJson = (evt: React.MouseEvent) => {
    props.onClick(evt);
  };

  const importSampleTemplate = async (evt: React.MouseEvent) => {
    props.onClick(evt);
  };

  const importOtherTemplates = async (evt: React.MouseEvent) => {
    props.onClick(evt);
  };

  return (
    <div role="menu" className="file-format-menu" hidden={!props.expanded}>
      <MenuItem
        className="file-format-menu-item"
        label="Import JSON"
        onClick={importJson}
      />
      <MenuItem
        className="file-format-menu-item"
        label="Import sample template"
        onClick={importSampleTemplate}
      />
      <MenuItem
        className="file-format-menu-item"
        label="Import other templates..."
        onClick={importOtherTemplates}
      />
    </div>
  );
};

export interface ImporterMenuProps {
  expanded: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

export default ImporterMenu;
