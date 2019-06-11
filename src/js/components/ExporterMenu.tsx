import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import FileExporter from "../domain/FileExporter";
import { convertStateToText } from "../domain/TextConverter";

const ExporterMenu = (props: ExporterMenuProps) => {
  const { state } = useContext(EditorContext);

  const exportAsJson = (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsJson(convertStateToText(state), state.name);
  };

  const exportAsDesktopJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsDesktopJS(convertStateToText(state), state.name);
  };

  const exportAsMobileJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsMobileJS(convertStateToText(state), state.name);
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
