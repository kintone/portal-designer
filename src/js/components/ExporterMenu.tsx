import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import { exportFile } from "../domain/FileExporter";
import { convertStateToText } from "../domain/TextConverter";

const ExporterMenu = (props: ExporterMenuProps) => {
  const { state } = useContext(EditorContext);

  const exportAsJson = (evt: React.MouseEvent) => {
    exportFile(convertStateToText(state), state.name);
    props.onClick(evt);
  };

  const exportAsJavaScript = (evt: React.MouseEvent) => {
    // TODO: implement
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
        disabled
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
