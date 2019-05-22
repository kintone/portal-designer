import React from "react";

const ExporterMenu = (props: ExporterMenuProps) => {
  const exportAsJson = (evt: React.MouseEvent) => {
    console.log("as JSON");
    props.onClick(evt);
  };

  const exportAsJavaScript = (evt: React.MouseEvent) => {
    console.log("as JavaScript");
    props.onClick(evt);
  };

  return (
    <div role="menu" className="file-format-menu" hidden={!props.expanded}>
      <button
        type="button"
        role="menuitem"
        className="file-format-menu-item"
        onClick={exportAsJson}
      >
        Export as JSON
      </button>
      <button
        type="button"
        role="menuitem"
        className="file-format-menu-item"
        onClick={exportAsJavaScript}
      >
        Export as JavaScript
      </button>
    </div>
  );
};

export interface ExporterMenuProps {
  expanded: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

export default ExporterMenu;
