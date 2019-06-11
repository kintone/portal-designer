import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import { exportFile } from "../domain/FileExporter";
import { convertStateToText } from "../domain/TextConverter";

const ExporterMenu = (props: ExporterMenuProps) => {
  const { state } = useContext(EditorContext);

  const exportAsJson = (evt: React.MouseEvent) => {
    props.onClick(evt);

    exportFile(convertStateToText(state), state.name || "customize", "json");
  };

  const exportAsDesktopJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);

    const response = await fetch(
      chrome.runtime.getURL("js/templates/desktop.js")
    );
    const template = await response.text();
    const jsString = template.replace(
      "${renderingModel}",
      convertStateToText(state)
    );
    exportFile(jsString, state.name || "desktop", "js");
  };

  const exportAsMobileJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);

    const response = await fetch(
      chrome.runtime.getURL("js/templates/mobile.js")
    );
    const template = await response.text();
    const jsString = template.replace(
      "${renderingModel}",
      convertStateToText(state)
    );
    exportFile(jsString, state.name || "mobile", "js");
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
