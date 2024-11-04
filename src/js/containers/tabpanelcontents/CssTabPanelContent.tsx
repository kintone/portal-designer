import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import TextArea from "../../components/TextArea";

const CssTabPanelContent = () => {
  // @ts-ignore
  const { state, dispatch } = useContext(EditorContext);

  const onChange = (css: string) => {
    dispatch({ type: "CSS_VALUE_CHANGE", css });
  };

  return (
    <TextArea
      label="CSS"
      language="css"
      value={state.editor.css.value}
      onChange={onChange}
    />
  );
};

export default CssTabPanelContent;
