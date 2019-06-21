import React from "react";
import Loading from "../Loading";

const DialogFooter = (props: DialogFooterProps) => {
  return (
    <div className={`${props.baseClass}-footer`}>
      <div className={`${props.baseClass}-footer-left`}>
        <button
          type="button"
          className={`${props.baseClass}-button-cancel`}
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </div>
      <div className={`${props.baseClass}-footer-right`}>
        <button
          type="button"
          className={`${props.baseClass}-button-ok`}
          onClick={props.onConfirm}
          disabled={props.confirming}
        >
          {props.confirmLabel}
          <Loading enabled={props.confirming} />
        </button>
      </div>
    </div>
  );
};

interface DialogFooterProps {
  onCancel: () => any;
  onConfirm: () => any;
  confirming: boolean;
  confirmLabel: string;
  baseClass: string;
}

export default DialogFooter;
