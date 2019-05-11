import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import Storage from "../domain/Storage";
import { convertStateToStorage } from "../domain/StorageConverter";

const SaveButton = () => {
  const { state } = useContext(EditorContext);

  const onClick = async () => {
    await Storage.set(convertStateToStorage(state));
  };

  return (
    <button type="button" className="action-save" onClick={onClick}>
      Save
    </button>
  );
};

export default SaveButton;
