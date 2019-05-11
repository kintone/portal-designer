import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import ToolbarColorInput from "../../components/tabpanelcontents/ToolbarColorInput";

export default props => {
  const { state, dispatch } = useContext(EditorContext);

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
