import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import FileExporter from "../domain/FileExporter";

const ExporterMenu = (props: ExporterMenuProps) => {
  const { state } = useContext(EditorContext);

  const exportAsJson = (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsJson(state);
  };

  const exportAsDesktopJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsDesktopJS(state);
  };

  const exportAsMobileJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsMobileJS(state);
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
        onClick={exportAsDesktopJS}
      >
        Export as JavaScript (Desktop)
      </button>
      <button
        type="button"
        role="menuitem"
        className="file-format-menu-item"
        onClick={exportAsMobileJS}
      >
        Export as JavaScript (Mobile)
      </button>
    </div>
  );
};

export interface ExporterMenuProps {
  expanded: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

export default ExporterMenu;
