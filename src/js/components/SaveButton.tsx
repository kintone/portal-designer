import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import Storage from "../domain/Storage";
import { convertStateToStorage } from "../domain/StorageConverter";

const SaveButton = () => {
  const { state, dispatch } = useContext(EditorContext);

  const onClick = async () => {
    await Storage.set(convertStateToStorage(state));
    // 一旦Notifierを消す
    dispatch({ type: "NOTIFY_SAVED", notifySaved: false });
    dispatch({ type: "NOTIFY_SAVED", notifySaved: true });
  };

  return (
    <button type="button" className="action-save" onClick={onClick}>
      Save
    </button>
  );
};

export default SaveButton;
