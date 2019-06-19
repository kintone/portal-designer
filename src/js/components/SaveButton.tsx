import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import saveEditor from "../domain/saveEditor";

const SaveButton = () => {
  const context = useContext(EditorContext);

  const onClick = async () => {
    await saveEditor(context);
  };

  return (
    <button type="button" className="action-save" onClick={onClick}>
      Save
    </button>
  );
};

export default SaveButton;
