import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import FileExporter from "../domain/FileExporter";
import ExporterMenuItem from "./ExporterMenuItem";

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
      <ExporterMenuItem label="Export as JSON" onClick={exportAsJson} />
      <ExporterMenuItem
        label="Export as JavaScript (Desktop)"
        onClick={exportAsDesktopJS}
      />
      <ExporterMenuItem
        label="Export as JavaScript (Mobile)"
        onClick={exportAsMobileJS}
      />
    </div>
  );
};

export interface ExporterMenuProps {
  expanded: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

export default ExporterMenu;
