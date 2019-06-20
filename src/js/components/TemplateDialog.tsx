import React from "react";

class TemplateDialog extends React.Component<TemplateDialogProps, {}> {
  dialogRef: React.RefObject<HTMLDialogElement>;
  constructor(props: TemplateDialogProps) {
    super(props);
    this.dialogRef = React.createRef();
  }

  componentDidUpdate(prevProps: TemplateDialogProps) {
    if (this.props.opened === prevProps.opened) {
      return;
    }
    if (this.dialogRef && this.dialogRef.current) {
      if (this.props.opened) {
        this.dialogRef.current.showModal();
      } else {
        this.dialogRef.current.close();
      }
    }
  }

  render() {
    return (
      <dialog ref={this.dialogRef} className="template-dialog">
        <div className="template-dialog-header">
          <h1 className="template-dialog-header-text">Sample Template</h1>
        </div>
        <div className="template-dialog-content" />
        <div className="template-dialog-footer">
          <div className="template-dialog-footer-left">
            <button
              type="button"
              className="template-dialog-button-cancel"
              onClick={() => this.props.onClose()}
            >
              Cancel
            </button>
          </div>
          <div className="template-dialog-footer-right">
            <button
              type="button"
              className="template-dialog-button-ok"
              onClick={() => this.props.onClose()}
            >
              Import
            </button>
          </div>
        </div>
      </dialog>
    );
  }
}

interface TemplateDialogProps {
  onClose: Function;
  opened: boolean;
}

export default TemplateDialog;
