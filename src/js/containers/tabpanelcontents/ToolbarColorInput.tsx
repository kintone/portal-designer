import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import ToolbarColorInput from "../../components/tabpanelcontents/ToolbarColorInput";

export default (props: any) => {
  // @ts-ignore
  const { state, dispatch } = useContext(EditorContext);

  const onChange = (toolbarColor: string) => {
    dispatch({ type: "TOOLBAR_COLOR_CHANGE", toolbarColor });
  };

  return (
    <ToolbarColorInput
      {...props}
      value={state.editor.toolbarColor}
      onChange={onChange}
    />
  );
};
