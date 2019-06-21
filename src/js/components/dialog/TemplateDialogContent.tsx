import React from "react";
import TemplateDownloader from "../../domain/TemplateDownloader";

const TemplateDialogContent = (props: TemplateDialogContentProps) => {
  const templateModels = TemplateDownloader.getModels();

  const renderContent = (models: any[], baseClass: string) => {
    const templatesView = [];
    for (let i = 0; i < models.length; i++) {
      templatesView.push(
        <li className={`${baseClass}-listitem`} key={i}>
          <label className={`${baseClass}-listitem-select`}>
            <input
              type="radio"
              name="radios"
              className="visually-hidden"
              value={i}
              defaultChecked={i === 0}
            />
            <img
              className={`${baseClass}-thumbnail`}
              src={models[i].thumbnail}
              alt=""
            />
            <span aria-hidden="true" className={`${baseClass}-name`}>
              {models[i].name}
            </span>
          </label>
        </li>
      );
    }
    return <ul className="template-dialog-list">{templatesView}</ul>;
  };

  return (
    <div className={`${props.baseClass}-content`}>
      <p className={`${props.baseClass}-description`}>
        {chrome.i18n.getMessage("kpd_template_dialog_description")}
      </p>
      <form ref={props.formRef}>
        {renderContent(templateModels, props.baseClass)}
      </form>
    </div>
  );
};

interface TemplateDialogContentProps {
  formRef: React.RefObject<HTMLFormElement>;
  baseClass: string;
}

export default TemplateDialogContent;
