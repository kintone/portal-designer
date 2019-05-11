import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { EditorStore } from "../EditorStore";
import { convertTextToStateFragment } from "../domain/TextConverter";

const Importer = props => {
  const { dispatch } = useContext(EditorStore);

  const handleChange = evt => {
    props.reader.readAsText(evt.target.files[0]);
  };

  const handleLoadFile = evt => {
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

Importer.propTypes = {
  reader: PropTypes.objectOf(FileReader)
};

Importer.defaultProps = {
  reader: new FileReader()
};

export default Importer;
