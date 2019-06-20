import React, { useRef, useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";
import { convertTextToStateFragment } from "../domain/TextConverter";
import TemplateDownloader from "../domain/TemplateDownloader";

const TemplateDialog = (props: TemplateDialogProps) => {
  const { dispatch } = useContext(EditorContext);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const templateModels = TemplateDownloader.getModels();

  const handleCancel = () => {
    props.onClose();
  };

  const handleConfirm = () => {
    const templateIndex = formRef.current!.radios!.value;
    TemplateDownloader.download(templateIndex)
      .then((rawText: string) => {
        const state = convertTextToStateFragment(rawText);
        dispatch({ type: "IMPORT_JSON", state });
      })
      .catch(error => {
        // TODO: Notifierを出す
        console.log(error);
      });
    props.onClose();
  };

  useEffect(() => {
    if (!dialogRef || !dialogRef.current) {
      return;
    }
    if (props.opened) {
      dialogRef.current!.showModal();
    } else {
      dialogRef.current!.close();
    }
  }, [props.opened]);

  const renderContent = (models: any[]) => {
    const templatesView = [];
    for (let i = 0; i < models.length; i++) {
      templatesView.push(
        <li className="template-dialog-listitem" key={i}>
          <label className="template-dialog-listitem-select">
            <input
              type="radio"
              name="radios"
              className="visually-hidden"
              value={i}
              defaultChecked={i === 0}
            />
            <img
              className="template-dialog-thumbnail"
              src={models[i].thumbnail}
              alt=""
            />
            <span aria-hidden="true" className="template-dialog-name">
              {models[i].name}
            </span>
          </label>
        </li>
      );
    }
    return <ul className="template-dialog-list">{templatesView}</ul>;
  };

  return (
    <dialog ref={dialogRef} className="template-dialog">
      <div className="template-dialog-header">
        <h1 className="template-dialog-header-text">Sample Template</h1>
      </div>
      <div className="template-dialog-content">
        <p className="template-dialog-description">Choose templates.</p>
        <form ref={formRef}>{renderContent(templateModels)}</form>
      </div>
      <div className="template-dialog-footer">
        <div className="template-dialog-footer-left">
          <button
            type="button"
            className="template-dialog-button-cancel"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
        </div>
        <div className="template-dialog-footer-right">
          <button
            type="button"
            className="template-dialog-button-ok"
            onClick={() => handleConfirm()}
          >
            Import
          </button>
        </div>
      </div>
    </dialog>
  );
};

interface TemplateDialogProps {
  onClose: Function;
  opened: boolean;
}

export default TemplateDialog;
