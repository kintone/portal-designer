import React, { useRef, useContext, useState } from "react";
import { EditorContext } from "../../EditorContext";
import Dialog from "./Dialog";
import TemplateDialogContent from "./TemplateDialogContent";
import TemplateDownloader from "../../domain/TemplateDownloader";

const TemplateDialog = () => {
  const { state, dispatch } = useContext(EditorContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [importing, setImporting] = useState(false);

  const handleClose = () => {
    dispatch({ type: "CLOSE_TEMPLATES_DIALOG" });
  };

  const handleCancel = () => {
    dispatch({ type: "CLOSE_TEMPLATES_DIALOG" });
  };

  const handleConfirm = async () => {
    setImporting(true);

    const templateIndex = formRef.current!.radios!.value;
    try {
      const newState = await TemplateDownloader.download(templateIndex);
      dispatch({ type: "IMPORT_JSON", state: newState });
      dispatch({ type: "CLOSE_TEMPLATES_DIALOG" });
    } catch {
      alert(
        "Unable to download sample template. Please confirm you can access https://raw.githubusercontent.com"
      );
    }
    setImporting(false);
  };

  return (
    <Dialog
      opened={state.templateDialogOpened}
      onClose={handleClose}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      confirming={importing}
      confirmLabel="Import"
      headerLabel="Sample Template"
      baseClass="template-dialog"
    >
      <TemplateDialogContent formRef={formRef} baseClass="template-dialog" />
    </Dialog>
  );
};

export default TemplateDialog;
