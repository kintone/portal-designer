import React, { useRef, useEffect } from "react";
import DialogHeader from "./DialogHeader";
import DialogFooter from "./DialogFooter";

const Dialog = (props: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

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

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  const handleKeyup = (evt: any) => {
    if (evt.keyCode === 27) {
      // ESC key
      props.onClose();
    }
  };

  return (
    <dialog ref={dialogRef} className={props.baseClass}>
      <DialogHeader
        label={props.headerLabel}
        onClose={props.onClose}
        baseClass={props.baseClass}
      />
      {props.children}
      <DialogFooter
        onCancel={props.onCancel}
        onConfirm={props.onConfirm}
        confirming={props.confirming}
        confirmLabel={props.confirmLabel}
        baseClass={props.baseClass}
      />
    </dialog>
  );
};

interface DialogProps {
  children: any;
  onClose: () => any;
  onCancel: () => any;
  onConfirm: () => any;
  confirming: boolean;
  confirmLabel: string;
  headerLabel: string;
  baseClass: string;
  opened: boolean;
}

export default Dialog;
