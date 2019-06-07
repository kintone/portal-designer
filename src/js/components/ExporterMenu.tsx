import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import { exportFile } from "../domain/FileExporter";
import {
  convertStateToText,
  convertStateToTextForJs
} from "../domain/TextConverter";

const ExporterMenu = (props: ExporterMenuProps) => {
  const { state } = useContext(EditorContext);

  const exportAsJson = (evt: React.MouseEvent) => {
    props.onClick(evt);

    exportFile(convertStateToText(state), state.name || "customize", "json");
  };

  const exportAsJavaScript = async (evt: React.MouseEvent) => {
    props.onClick(evt);

    const response = await fetch(chrome.runtime.getURL("js/template.js"));
    const template = await response.text();
    const jsString = template.replace(
      "${renderingModel}",
      convertStateToText(state)
    );
    exportFile(jsString, state.name || "customize", "js");
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
