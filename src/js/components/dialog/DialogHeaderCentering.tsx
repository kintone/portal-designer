import React from "react";

const DialogHeader = (props: DialogHeaderCenteringProps) => {
  return (
    <div className={`${props.baseClass}-header-centering`}>
      <h1 className={`${props.baseClass}-header-centering-text`}>
        {props.label}
      </h1>
      <div className={`${props.baseClass}-header-centering-right`}>
        <button
          className={`${props.baseClass}-header-close`}
          type="button"
          onClick={props.onClose}
          title={chrome.i18n.getMessage("kpd_dialog_header_close")}
        >
          <img
            src="../../img/dialog-close.png"
            alt={chrome.i18n.getMessage("kpd_dialog_header_close")}
          />
        </button>
      </div>
    </div>
  );
};

interface DialogHeaderCenteringProps {
  label: string;
  onClose: () => any;
  baseClass: string;
}

export default DialogHeader;
