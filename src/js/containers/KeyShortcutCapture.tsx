import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import saveEditor from "../domain/saveEditor";

const KeyShortcutCapture = (props: KeyShortcutCaptureProps) => {
  const { state, dispatch } = useContext(EditorContext);

  const handleKeyDown = async (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if ((evt.ctrlKey || evt.metaKey) && evt.which === 83) {
      evt.preventDefault();
      await saveEditor({ state, dispatch });
    }
  };

  return <div onKeyDown={handleKeyDown}>{props.children}</div>;
};

interface KeyShortcutCaptureProps {
  children: React.ReactNode;
}

export default KeyShortcutCapture;
