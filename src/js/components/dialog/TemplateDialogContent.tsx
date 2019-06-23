import React, { useState, useEffect } from "react";
import TemplateDownloader from "../../domain/TemplateDownloader";

const TemplateDialogContent = (props: TemplateDialogContentProps) => {
  const [templateModels, setTemplateModels] = useState<TemplateModel[]>([]);

  useEffect(() => {
    TemplateDownloader.getModels().then(setTemplateModels);
  }, []);

  const renderTemplate = (
    baseClass: string,
    model: TemplateModel,
    i: number
  ) => {
    return (
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
            src={model.thumbnail}
            alt=""
          />
          <span aria-hidden="true" className={`${baseClass}-name`}>
            {model.name}
          </span>
        </label>
      </li>
    );
  };

  const renderTemplates = (baseClass: string, models: TemplateModel[]) => {
    const templatesView = models.map((model, i) => {
      return renderTemplate(baseClass, model, i);
    });
    return <ul className="template-dialog-list">{templatesView}</ul>;
  };

  return (
    <div className={`${props.baseClass}-content`}>
      <p className={`${props.baseClass}-description`}>
        {chrome.i18n.getMessage("kpd_template_dialog_description")}
      </p>
      <form ref={props.formRef}>
        {renderTemplates(props.baseClass, templateModels)}
      </form>
    </div>
  );
};

interface TemplateDialogContentProps {
  formRef: React.RefObject<HTMLFormElement>;
  baseClass: string;
}

export default TemplateDialogContent;
