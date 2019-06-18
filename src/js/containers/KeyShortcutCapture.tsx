import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import Storage from "../domain/Storage";
import { convertStateToStorage } from "../domain/StorageConverter";

const KeyShortcutCapture = (props: KeyShortcutCaptureProps) => {
  const { state, dispatch } = useContext(EditorContext);

  const handleKeyDown = async (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if ((evt.ctrlKey || evt.metaKey) && evt.which === 83) {
      evt.preventDefault();

      await Storage.set(convertStateToStorage(state));
      // 一旦Notifierを消す
      dispatch({ type: "NOTIFY_SAVED", notifySaved: false });
      dispatch({ type: "NOTIFY_SAVED", notifySaved: true });
    }
  };

  return <div onKeyDown={handleKeyDown}>{props.children}</div>;
};

interface KeyShortcutCaptureProps {
  children: React.ReactNode;
}

export default KeyShortcutCapture;
