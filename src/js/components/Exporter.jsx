import React, { useContext } from "react";
import { EditorStore } from "../EditorStore";
import { exportFile } from "../domain/FileExporter";
import { convertStateToText } from "../domain/TextConverter";

const Exporter = () => {
  const { state } = useContext(EditorStore);

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
