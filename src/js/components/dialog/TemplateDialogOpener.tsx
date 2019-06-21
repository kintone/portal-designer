import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";

const TemplateDialogOpener = () => {
  const { dispatch } = useContext(EditorContext);

  const openTemplateDialog = () => {
    dispatch({ type: "OPEN_TEMPLATES_DIALOG" });
  };

  return (
    <button
      type="button"
      className="action-export"
      onClick={openTemplateDialog}
    >
      Templates
    </button>
  );
};

export default TemplateDialogOpener;
