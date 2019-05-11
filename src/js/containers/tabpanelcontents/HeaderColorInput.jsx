import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import HeaderColorInput from "../../components/tabpanelcontents/HeaderColorInput";

export default props => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = headerColor => {
    dispatch({ type: "HEADER_COLOR_CHANGE", headerColor });
  };

  return (
    <HeaderColorInput
      {...props}
      value={state.editor.headerColor}
      onChange={onChange}
    />
  );
};
