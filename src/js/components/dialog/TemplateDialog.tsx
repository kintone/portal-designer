import React, { useRef, useContext, useEffect, useState } from "react";
import { EditorContext } from "../../EditorContext";
import { convertTextToStateFragment } from "../../domain/TextConverter";
import DialogHeader from "./DialogHeader";
import DialogFooter from "./DialogFooter";
import TemplateDialogContent from "./TemplateDialogContent";
import TemplateDownloader from "../../domain/TemplateDownloader";

const TemplateDialog = () => {
  const { state, dispatch } = useContext(EditorContext);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [importing, setImporting] = useState(false);

  const handleClose = () => {
    dispatch({ type: "CLOSE_TEMPLATES_DIALOG" });
  };

  const handleCancel = () => {
    dispatch({ type: "CLOSE_TEMPLATES_DIALOG" });
  };

  const handleConfirm = () => {
    setImporting(true);

    const templateIndex = formRef.current!.radios!.value;
    TemplateDownloader.download(templateIndex)
      .then((rawText: string) => {
        const newState = convertTextToStateFragment(rawText);
        dispatch({ type: "IMPORT_JSON", state: newState });
        dispatch({ type: "CLOSE_TEMPLATES_DIALOG" });
      })
      .catch(() => {
        alert(
          "Unable to download sample template. Please confirm you can access https://raw.githubusercontent.com"
        );
      })
      .finally(() => {
        setImporting(false);
      });
  };

  useEffect(() => {
    if (!dialogRef || !dialogRef.current) {
      return;
    }
    if (state.templateDialogOpened) {
      dialogRef.current!.showModal();
    } else {
      dialogRef.current!.close();
    }
  }, [state.templateDialogOpened]);

  return (
    <dialog ref={dialogRef} className="template-dialog">
      <DialogHeader
        label="Sample Template"
        onClose={handleClose}
        baseClass="template-dialog"
      />
      <TemplateDialogContent formRef={formRef} baseClass="template-dialog" />
      <DialogFooter
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        confirming={importing}
        confirmLabel="Import"
        baseClass="template-dialog"
      />
    </dialog>
  );
};

export default TemplateDialog;
