import React from "react";

const DialogHeader = (props: DialogHeaderProps) => {
  return (
    <div className={`${props.baseClass}-header`}>
      <div className={`${props.baseClass}-header-left`}>
        <h1 className={`${props.baseClass}-header-text`}>{props.label}</h1>
      </div>
      <div className={`${props.baseClass}-header-right`}>
        <button
          className={`${props.baseClass}-header-close`}
          type="button"
          onClick={props.onClose}
          title="Close Dialog"
        >
          <img src="../../img/dialog-close.png" alt="Close Dialog" />
        </button>
      </div>
    </div>
  );
};

interface DialogHeaderProps {
  label: string;
  onClose: () => any;
  baseClass: string;
}

export default DialogHeader;
