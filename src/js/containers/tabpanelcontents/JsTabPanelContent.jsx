import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import TextArea from "../../components/TextArea";

const JsTabPanelContent = props => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = js => {
    dispatch({ type: "JS_VALUE_CHANGE", js });
  };

  return (
    <TextArea
      {...props}
      className="tabpanel-input js-input"
      name="js"
      label="JS"
      value={state.editor.js.value}
      onChange={onChange}
    />
  );
};

export default JsTabPanelContent;
