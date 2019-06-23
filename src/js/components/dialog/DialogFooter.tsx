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
          {chrome.i18n.getMessage("kpd_dialog_footer_cancel")}
        </button>
      </div>
      <div className={`${props.baseClass}-footer-right`}>
        <button
          type="button"
          className={`${props.baseClass}-button-ok`}
          onClick={props.onConfirm}
          disabled={props.confirming || !props.canConfirm}
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
  canConfirm: boolean;
  confirming: boolean;
  confirmLabel: string;
  baseClass: string;
}

export default DialogFooter;
