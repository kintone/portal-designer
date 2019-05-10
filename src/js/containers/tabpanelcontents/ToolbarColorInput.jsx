import React, { useContext } from "react";
import { EditorStore } from "../../EditorStore";
import ToolbarColorInput from "../../components/tabpanelcontents/ToolbarColorInput";

export default props => {
  const { state, dispatch } = useContext(EditorStore);

  const onChange = toolbarColor => {
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
