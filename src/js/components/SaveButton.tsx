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
      {chrome.i18n.getMessage("kpd_save_button")}
    </button>
  );
};

export default SaveButton;
