import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import { exportFile } from "../domain/FileExporter";
import { convertStateToText } from "../domain/TextConverter";

const Exporter = () => {
  const { state } = useContext(EditorContext);

  const handleExport = () => {
    exportFile(convertStateToText(state), state.name);
  };

  return (
    <button type="button" className="action-export" onClick={handleExport}>
      Export
    </button>
  );
};

export default Exporter;
