import React, { useState } from "react";
import Loading from "../Loading";

const TemplateThumbnail = ({
  baseClass,
  model,
  defaultChecked,
  i
}: TemplateThumbnailProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const setImageLoaded = () => setLoaded(true);

  return (
    <li className={`${baseClass}-listitem`}>
      <label className={`${baseClass}-listitem-select`}>
        <input
          type="radio"
          name="radios"
          className="visually-hidden"
          value={i}
          defaultChecked={defaultChecked}
        />
        <div className={`${baseClass}-thumbnail-container`}>
          <img
            className={`${baseClass}-thumbnail`}
            src={model.thumbnail}
            alt=""
            onLoad={setImageLoaded}
          />
          <Loading enabled={!loaded} />
        </div>
        <span className={`${baseClass}-name`}>{model.name}</span>
      </label>
    </li>
  );
};

interface TemplateThumbnailProps {
  baseClass: string;
  model: TemplateModel;
  defaultChecked: boolean;
  i: number;
}

const TemplateDialogContent = (props: TemplateDialogContentProps) => {
  const renderTemplates = (baseClass: string, models: TemplateModel[]) => {
    const templatesView = models.map((model, i) => {
      return (
        <TemplateThumbnail
          baseClass={baseClass}
          model={model}
          defaultChecked={i === 0}
          i={i}
          key={i}
        />
      );
    });
    return <ul className="template-dialog-list">{templatesView}</ul>;
  };

  return (
    <div className={`${props.baseClass}-content`}>
      <p className={`${props.baseClass}-description`}>
        {chrome.i18n.getMessage("kpd_template_dialog_description")}
      </p>
      <form ref={props.formRef}>
        {renderTemplates(props.baseClass, props.templateModels)}
      </form>
    </div>
  );
};

interface TemplateDialogContentProps {
  formRef: React.RefObject<HTMLFormElement>;
  baseClass: string;
  templateModels: TemplateModel[];
}

export default TemplateDialogContent;
