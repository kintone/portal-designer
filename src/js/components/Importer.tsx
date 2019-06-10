import React, { useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";
import { convertTextToStateFragment } from "../domain/TextConverter";

const Importer = (props: ImporterProps) => {
  const { dispatch } = useContext(EditorContext);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.reader.readAsText(evt.target.files![0]);
  };

  const handleLoadFile = (evt: any) => {
    const state = convertTextToStateFragment(evt.target.result);
    dispatch({ type: "IMPORT_JSON", state });
  };

  useEffect(() => {
    props.reader.addEventListener("load", handleLoadFile);
  }, []);

  return (
    <label className="action-import-label" htmlFor="action-import-label">
      Import
      <input
        type="file"
        accept=".json"
        className="action-import visually-hidden"
        value=""
        onChange={handleChange}
        id="action-import-label"
      />
    </label>
  );
};

interface ImporterProps {
  reader: FileReader;
}

Importer.defaultProps = {
  reader: new FileReader()
};

export default Importer;