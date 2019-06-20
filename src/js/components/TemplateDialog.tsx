import React from "react";

class TemplateDialog extends React.Component<TemplateDialogProps, {}> {
  dialogRef: React.RefObject<HTMLDialogElement>;
  templates: any[];
  constructor(props: TemplateDialogProps) {
    super(props);
    this.dialogRef = React.createRef();

    const baseURL =
      "https://raw.githubusercontent.com/kintone/portal-design-templates/master";

    this.templates = [
      {
        filename: "basic-1column.json",
        thumbnail: baseURL + "/basic/1column/basic-1column.png"
      },
      {
        filename: "basic-1column-photo.json",
        thumbnail: baseURL + "/basic/1column/basic-1column-photo.png"
      },
      {
        filename: "classic.json",
        thumbnail: baseURL + "/classic/classic.png"
      },
      {
        filename: "classic-all.json",
        thumbnail: baseURL + "/classic/classic-all.png"
      },
      {
        filename: "advanced-3tabs.json",
        thumbnail: baseURL + "/advanced/3tabs/advanced-3tabs.png"
      }
    ];
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

  renderContent(templates: any[]) {
    const templatesView = [];
    for (let i = 0; i < templates.length; i++) {
      templatesView.push(
        <li className="template-dialog-listitem" key={i}>
          <div>
            <img
              className="template-dialog-thumbnail"
              src={templates[i].thumbnail}
              alt=""
            />
            <span className="template-dialog-filename">
              {templates[i].filename}
            </span>
          </div>
        </li>
      );
    }
    return <ul className="template-dialog-list">{templatesView}</ul>;
  }

  render() {
    return (
      <dialog ref={this.dialogRef} className="template-dialog">
        <div className="template-dialog-header">
          <h1 className="template-dialog-header-text">Sample Template</h1>
        </div>
        <div className="template-dialog-content">
          <p className="template-dialog-description">Choose templates.</p>
          {this.renderContent(this.templates)}
        </div>
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
